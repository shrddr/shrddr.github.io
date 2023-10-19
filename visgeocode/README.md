Инструкция на русском языке — [внизу](#Визуальное-геокодирование).

# Interactive Geocoding

A simple page for processing geocoding results. Can query an external service
with osm2pgsql database for building contours. From a CSV file with addresses
and extra attributes it can - with the help of a user - produce GeoJSON with
building contours.

## Installation

Put the `findbuildings.py` script into the `cgi-bin` directory of a server with
osm2pgsql database. In its header you should change connection parameters.
In `html` files specify the absolute path to that script. Publish all
`html` and `js` files somewhere.

If default geocoding parameters are good, either building contours are not needed
or your area fits tile.osmz.ru region, you can use
[the page right here](http://zverik.github.io/visgeocode/en.html).

## Usage

1. Paste into the text area a CSV with addresses and a header in the first line.
2. Change or delete the city name, and move the rectangle, so it covers all
    addresses from the CSV.
3. Press "Start geocoding" button and watch markers slowly appear.
4. Markers that missed any buildings should be dragged to correct places on top of buildings.
5. If you need contours, click "Markers to contours". Are there markers left? Check them:
    some must be duplicates, some miss their buildings. Repeat step 4.
6. Points can be saved to CSV, polygons - only to GeoJSON.
7. Do not forget "© OpenStreetMap contributors".

## Author and License

Scripts `findbuildings.py`, `FunctionButtons.js`, `visgeocode.js` and all `html` files
were written by ILya Zverev and published under WTFPL license. `Edit*.js` files were
stolen (and slightly modified) from [Leaflet.draw](https://github.com/leaflet/leaflet.draw),
library, which is MIT-licensed.

# Визуальное геокодирование

Простая страница для обработки результатов геокодирования. Может обращаться к внешнему
сайту с базой osm2pgsql для получения контуров зданий по координатам. В результате
из CSV с адресами и дополнительными атрибутами получится GeoJSON с контурами.

## Установка

Скрипт `findbuildings.py` скопировать в `cgi-bin` сервера с базой osm2pgsql, в начале
скрипта поправить параметры соединения с базой данных. В файле `index.html` указать
путь к этому скрипту. Выложить все файлы `html` и `js` куда-нибудь.

Если не требуется настройка геокодирования, или контуры зданий, или область геокодирования
попадает в регион, обновляемый на tile.osmz.ru, то можно воспользоваться скриптом
[прямо отсюда](http://zverik.github.io/visgeocode/index.html).

## Использование

В поле ввода вставьте файл CSV (разделитель — «;»), первой строкой должны идти
названия колонок. Либо среди них есть «address», либо адресом считается первая колонка.
Введите город для уточнения геокодирования, перенесите рамку на карте в правильное
место, и жмите кнопку.

Геокодирование пойдёт на фоне, слева внизу можно следить за процессом. Нежелательно
обрабатывать более 300-400 адресов за раз: лучше работать с фрагментами, а потом
объединить. Все найденные точки можно двигать к правильным зданиям. Ненайденные адреса
будут добавляться точками под рамкой.

Кнопка «Точки в контуры» отправит все координаты скрипту `findbuildings.py`, который
найдёт здания, содержащие эти точки, и вернёт контуры, которые заменят маркеры.
При этом каждое здание вернётся только один раз: если в каком-то будет несколько точек,
то за один прогон скрипта только одна из них превратится в контур. Превратить
контур обратно в маркер можно двойным щелчком, так же можно включить режим
редактировани рамки: на сервер отправляются только маркеры внутри неё.

Закончив работу с маркерами и контурами, нажмите «Скачать GeoJSON», в открывшемся
окне скопируйте весь текст в файл. Позже, если потребуется что-то переделать,
этот текст можно вставить в поле ввода в начале: вместо геокодирования страница
загрузит этот GeoJSON. Так можно получить CSV, но продолжить его редактирование
тем же способом будет невозможно: для этого сохраняйте и GeoJSON.

Помните, что для геокодирования и получения контуров используется база OpenStreetMap.
Итоговые данные должны быть доступны под открытой лицензией (PDDL, ODbL, CC-BY-SA и т.п.),
и при их использовании обязательно где-нибудь написать «Геоданные © OpenStreetMap».

## Э-э-э што

1. Вставьте в поле ввода CSV с адресами и заголовком в первой строке.
2. Поправьте название города (или удалите) и переместите прямоугольник, чтобы он накрывал
    все адреса из CSV.
3. Нажмите кнопку «Геокодировать» и смотрите, как медленно появляются маркеры.
4. Маркеры, не попавшие на дома или вообще за пределами области, нужно руками перетащить
    на нужные здания.
5. Если нужны контуры, жмите «точки в контуры». Остались маркеры? Проверьте их — там либо
    дубликаты, либо нет зданий в OpenStreetMap. Повторите шаг 4.
6. Точки можно сохранить в CSV, контуры — только в GeoJSON.
7. Не забудьте «© участники OpenStreetMap».

## Автор и лицензия

Скрипт `findbuildings.py`, файлы `FunctionButtons.js`, `visgeocode.js` и все `html` написаны Ильёй Зверевым
и опубликованы под лицензией WTFPL: делайте с ними что угодно. Файлы `Edit*.js` взяты
(и слегка изменены) из библиотеки [Leaflet.draw](https://github.com/leaflet/leaflet.draw),
опубликованной под лицензией MIT.
