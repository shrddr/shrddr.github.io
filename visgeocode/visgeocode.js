if( !window.visgeocode )
	window.visgeocode = {
		findbuildings: 'http://tile.osmz.ru/cgi-bin/findbuildings.py',
		str_moverect: 'Move rectangle here',
		str_geojson: 'Download GeoJSON',
		str_csv: 'Download CSV',
		str_contours: 'Markers to contours',
		str_numbers: 'Total: %1, found: %2|, failed: %3|, polygons: %4'
	};

var toGeocode, bounds, failCoord, fcStep,
	cntTotal = 0, cntCorrect = 0, cntFailed = 0,
	map, rect, fbMoveRect;

$(document).ready(function() {
	var bbox = window.visgeocode.bbox || [30, 59.8, 30.6, 60.1];
	rect = L.rectangle([[bbox[1], bbox[0]], [bbox[3], bbox[2]]], { stroke: false });
	map = L.map('map', {minZoom: 4}).fitBounds(rect.getBounds());
	L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: 'Карта &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>' }).addTo(map);
	map.addLayer(rect);
	rect.editing.enable();
	fbMoveRect = L.functionButton(window.visgeocode.str_moverect, { callback: moveRect }, { position: 'topleft' });
	map.addControl(fbMoveRect);
});

function moveRect() {
	var width4 = Math.min(320, map.getSize().x / 8),
		height4 = Math.min(320, map.getSize().y / 4),
		center = map.latLngToLayerPoint(map.getCenter()),
		ll1 = map.layerPointToLatLng(L.point(center.x - width4, center.y - height4)),
		ll2 = map.layerPointToLatLng(L.point(center.x + width4, center.y + height4));
	rect.editing._setSize([ll1, ll2]);
}

function stageTwo(mapBounds) {
	map.removeControl(fbMoveRect);
	rect.editing.disable();
	rect.setStyle({ stroke: true, fill: false });
	if( mapBounds ) {
		var b2, b3;
		map.eachLayer(function(layer) {
			if( 'extraData' in layer ) {
				b3 = layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds();
				if( !b2 )
					b2 = L.latLngBounds(b3);
				else
					b2.extend(b3);
			}
		});
		rect.setBounds(b2);
	}
	bounds = rect.getBounds();
	rect.on('dblclick', function() {
		if( rect.editing.enabled() )
			rect.editing.disable();
		else
			rect.editing.enable();
	});
	rect.on('edit', function() {
		bounds = rect.getBounds();
	});
	$('#form').hide();
	$('body').css('margin',0);
	$('#map').height('100%');
	$('#meters').show();
	map.invalidateSize();
	map.fitBounds(bounds);
	var btnDownload = { content: window.visgeocode.str_geojson, callback: downloadGeoJSON};
	var btnDownloadCSV = { content: window.visgeocode.str_csv, callback: downloadCSV};
	var btnPolygons = { content: window.visgeocode.str_contours, callback: queryPolygons};
	map.addControl(L.functionButtons([btnDownload, btnDownloadCSV, btnPolygons], { position: 'topleft' }));
	updateCounts();
}

function geocode() {
	var text = $('#text').val();
	if( text.indexOf('"Feature"') > 0 ) {
		loadGeoJSON(text);
		return;
	}

	var i, j, tgc, line,
		csv = text.split(/\n/),
		fields = [],
		fieldAddr = 0;

	toGeocode = [];
	if (csv.length > 0) {
		fields = parseCSVLine(csv[0]);
		for (i = 0; i < fields.length; i++)
			if (fields[i].toLowerCase() == 'addr' || fields[i].toLowerCase() == 'address' || fields[i].toLowerCase() == 'адрес')
				fieldAddr = i;
		for (i = 1; i < csv.length; i++) {
			line = parseCSVLine(csv[i]);
			if( line.length > fieldAddr && line[fieldAddr].length > 0 ) {
				tgc = [ line[fieldAddr], {} ];
				for( j = 0; j < line.length; j++ )
					tgc[1][j < fields.length ? fields[j] : j] = line[j];
				toGeocode.push(tgc);
			}
		}
	}

	if (toGeocode.length > 0) {
		cntTotal = toGeocode.length;
		stageTwo();
		fcStep = (bounds.getEast() - bounds.getWest()) / 50;
		failCoord = L.latLng(bounds.getSouth() - fcStep * 2, bounds.getWest());
		geocodeLine(0);
	} else
		alert("No lines to geocode.");
}

function parseCSVLine(line) {
	var i = 0, start = 0, i = 0, cols = [], quotes = false, qfirst = true, qlast;
	while( i <= line.length ) {
		if( i == line.length || (!quotes && line.charAt(i) == ';') ) {
			cols.push(line.substring(start, qlast > 0 ? qlast : i).replace(/^\s+|\s+$/g, ''));
			start = i + 1;
			qfirst = true;
			qlast = -1;
		} else if( line.charAt(i) == '"' ) {
			quotes = !quotes;
			if( qfirst ) {
				start = i + 1;
				qfirst = false;
				qlast = -1;
			} else
				qlast = i;
		}
		i++;
	}
	return cols;
}

function geocodeLine(n) {
	if( n >= toGeocode.length )
		return;

	var addr = toGeocode[n][0],
		city = $('#city').val();

	if( window.visgeocode.geocode )
		window.visgeocode.geocode(n, addr, city);
	else
		tryGeocode('nominatim', n, addr + ', ' + city)
}

function tryGeocode(engine, n, addr, next) {
	//console.log('Trying ' + engine + ' for line ' + n + ' addr: ' + addr);
	var server, params = { q: addr };
	if( engine == 'osmru' ) {
		server = 'http://openstreetmap.ru/api/search';
	} else if( engine == 'nominatim' ) {
		server = 'http://open.mapquestapi.com/nominatim/v1/search.php';
		params['format'] = 'json';
		params['viewbox'] = [bounds.getWest(), bounds.getNorth(), bounds.getEast(), bounds.getSouth()].join(',');
		params['bounded'] = 1;
	} else if( engine == 'sputnik' ) {
		server = 'http://search.maps.sputnik.ru/search';
		params['vlat'] = bounds.getCenter().lat;
		params['vlon'] = bounds.getCenter().lng;
	} else {
		//console.log('Unknown geocoding engine: ' + engine);
		return;
	}

	jQuery.ajax({
		url: server,
		data: params,
		//dataType: engine == 'sputnik' ? 'jsonp' : 'json'
		dataType: 'json'
	}).done(function(data) {
		process(data, n, next);
	}).fail(function() {
		process(false, n, next);
	});
}

function process(data, n, next) {
	//console.log(data); /* todo: remove */
	var list = !data ? [] : ('matches' in data ? data['matches'] : ('result' in data ? data['result'] : data));
	var i = 0, found = false;
	while( !found && i < list.length ) {
		var d = list[i++];
		var coord = 'position' in d && d['position'].length >= 2 ? d['position'] : d;
		if( 'lat' in coord && 'lon' in coord ) {
			coord = L.latLng(coord['lat'], coord['lon']);
			if( bounds.contains(coord) ) {
				found = coord;
			}
		}
	}
	if( !found && next )
		next(n);
	else {
		if( found ) {
			cntCorrect++;
		} else {
			cntFailed++;
		}
		map.addLayer(createMarker(found, toGeocode[n][1]));
		updateCounts();
		geocodeLine(n + 1);
	}
}

function loadGeoJSON(geojson) {
	var data = {}, i, coord;
	try {
		data = JSON.parse(geojson);
	} catch(e) {}

	var features = 'features' in data ? data.features : L.Util.isArray(data) ? data : 'type' in data && data.type == 'Feature' ? [data] : [];
	for( i = 0; i < features.length; i++ ) {
		var f = features[i];
		if( 'type' in f && f.type == 'Feature' && 'geometry' in f && 'properties' in f ) {
			if( f.geometry.type == 'Point' ) {
				coord = L.GeoJSON.coordsToLatLng(f.geometry.coordinates);
				map.addLayer(createMarker(coord, f.properties));
				cntTotal++;
			} else if( f.geometry.type == 'Polygon' ) {
				map.addLayer(createPolygon(f.geometry, f.properties));
				cntTotal++;
			}
		}
	}
	if( features.length == 0 )
		alert('There are no features in this GeoJSON');
	else {
		stageTwo(true);
	}
}

function createMarker(latLng, extraData) {
	var m;
	if( latLng )
		m = L.marker(latLng);
	else {
		m = L.marker(L.latLng(failCoord));
		failCoord.lng += fcStep;
		if( failCoord.lng >= bounds.getEast() ) {
			failCoord.lng = bounds.getWest();
			failCoord.lat += fcStep * 2;
		}
	}
	m.options.draggable = true;
	m.options.riseOnHover = true;
	m.on('mouseover click', function() {
		updateData(this);
	}, m);
	m.on('mouseout', function() {
		updateData();
	});
	m.extraData = extraData;
	return m;
}

function createPolygon(geometry, extraData, marker) {
	var layer = L.GeoJSON.geometryToLayer(geometry);
	layer.oldMarker = marker;
	layer.extraData = extraData;
	layer.on('mouseover click', function() {
		updateData(this);
	}, layer);
	layer.on('mouseout', function() {
		updateData();
	});
	layer.on('dblclick', function() {
		var m = this.oldMarker || createMarker(layer.getBounds().getCenter(), extraData);
		map.addLayer(m);
		map.removeLayer(this);
	}, layer);
	return layer;
}

function updateCounts() {
	var str = 'Всего: ' + cntTotal + ', найдено: ' + cntCorrect;
	var parts = window.visgeocode.str_numbers.split(/\|/);
	var str = parts[0].replace(/%1/, cntTotal).replace(/%2/, cntCorrect);
	if( cntFailed > 0 )
		str = str + parts[1].replace(/%3/, cntFailed);
	var cntPolygon = 0;
	map.eachLayer(function(layer) {
		if( 'extraData' in layer && 'oldMarker' in layer )
			cntPolygon++;
	});
	if( cntPolygon > 0 )
		str = str + parts[2].replace(/%4/, cntPolygon);
	$('#meters').html(str);
}

function updateData(obj) {
	var p, prop = [];
	if( obj && 'extraData' in obj ) {
		for( p in obj.extraData )
			if( obj.extraData.hasOwnProperty(p) )
				prop.push(p.replace(/&/, '&amp;').replace(/</, '&lt;') + ': ' + obj.extraData[p].replace(/&/, '&amp;').replace(/</, '&lt;'));
		$('#objdata').html(prop.join('<br>'));
		$('#objdata').show();
	} else
		$('#objdata').hide();
}

function downloadGeoJSON() {
	var f, features = [];
	map.eachLayer(function(layer) {
		if( 'extraData' in layer ) {
			f = { "type": "Feature", "properties": layer.extraData, "geometry": layer.toGeoJSON().geometry };
			features.push(f);
		}
	});
	var geojson = JSON.stringify({ "type": "FeatureCollection", "features": features });
	window.open().document.write(geojson);
}

function downloadCSV() {
	var f, csv = '', fields = {}, csvFields, line, coord;
	// 1. get fields
	map.eachLayer(function(layer) {
		if( 'extraData' in layer ) {
			for( f in layer.extraData )
				if( layer.extraData.hasOwnProperty(f) )
					fields[f] = true;
		}
	});

	// 2. print headers
	csvFields = ['lat', 'lon'];
	for( f in fields )
		if( fields.hasOwnProperty(f) )
			csvFields.push(f);
	csv = csvFields.join(';') + '<br>';

	// 3. prepare csv
	map.eachLayer(function(layer) {
		if( 'extraData' in layer ) {
			coord = 'getLatLng' in layer ? layer.getLatLng() : 'oldMarker' in layer ? layer.oldMarker.getLatLng() : 'getBounds' in layer ? layer.getBounds().getCenter() : false;
			line = coord ? [L.Util.formatNum(coord.lat, 6), L.Util.formatNum(coord.lng, 6)] : ['', ''];
			for( f = 2; f < csvFields.length; f++ ) {
				if( layer.extraData.hasOwnProperty(csvFields[f]) ) {
					str = layer.extraData[csvFields[f]];
					if( str.indexOf(';') >= 0 || str.indexOf('"') > 0 )
						str = '"' + str.replace(/"/, '""') + '"';
					line.push(str);
				}
			}
			csv = csv + line.join(';') + '<br>';
		}
	});
	window.open().document.write(csv);
}

function queryPolygons() {
	var data = [], markerMap = {}, i = 0;
	map.eachLayer(function(layer) {
		if( layer instanceof L.Marker && 'extraData' in layer && bounds.contains(layer.getLatLng()) ) {
			markerMap[i] = layer;
			data.push({ "id": i, "lat": layer.getLatLng().lat, "lon": layer.getLatLng().lng });
			i++;
		}
	});
	if( data.length > 0 ) {
		jQuery.ajax({
			url: window.visgeocode.findbuildings,
			type: 'POST',
			data: { 'json': JSON.stringify(data) },
			dataType: 'json'
		}).done(function(data) {
			for( i = 0; i < data.length; i++ ) {
				if( 'id' in data[i] && 'geometry' in data[i] ) {
					var marker = markerMap[data[i]['id']];
					var layer = createPolygon(data[i]['geometry'], marker.extraData, marker);
					map.removeLayer(marker);
					map.addLayer(layer);
				}
			}
			updateCounts();
		}).fail(function() {
			alert("Failed to request data");
		});
	}
}
