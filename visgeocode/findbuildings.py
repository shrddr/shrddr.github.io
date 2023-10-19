#!/usr/bin/python
# Script for converting coordinates to enclosing buildings, for visgeocode.html
import sys, os, cgi, json
import psycopg2

conn = psycopg2.connect('dbname=gis user=zverik')
cur = conn.cursor()

form = cgi.FieldStorage()
if 'json' in form and len(form.getfirst('json')):
	data = json.loads(form.getfirst('json'))
else:
	data = [];

ids = set()
if data and len(data) > 0:
	for f in data:
		if 'lat' in f and 'lon' in f:
			cur.execute('SELECT osm_id, ST_AsGeoJSON(ST_Transform(way, 4326)), ST_Area(way) as area FROM planet_osm_polygon WHERE building is not null AND ST_Contains(way, ST_Transform(ST_SetSRID(ST_Point(%s, %s), 4326), 900913)) ORDER BY area LIMIT 1', (f['lon'], f['lat']))
			result = cur.fetchone()
			if result and not result[0] in ids:
				ids.add(result[0])
				f['geometry'] = json.loads(result[1])

cur.close()
conn.close()

print 'Content-Type: application/json'
print 'Access-Control-Allow-Origin: *'
print
print json.dumps(data)
