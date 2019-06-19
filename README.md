<h1>#Timetrack</h1>
<p>
It is a simple application to count the hours with assisted geolocation. This project was designed in response to a Mywork challenge.
</p>

<h1>Features</h1>

<li>When checking in, this requests authorization to monitor the geolocation;

#When allowed;</li>
the timer counts the hours and while monitoring the geolocation.

#If you quit geofence or are out of coverage, you automatically apply the checkout and if the monitoring is denied the hour count is revoked.

#on each entry and exit an object is returned on the console with this format;

IN
{lat: -23.745885899999998, lng: -46.5312887, time: Wed Jun 19 2019 11:04:39 GMT-0300 (Horário Padrão de Brasília)}
Out
{lat: -23.745885899999998, lng: -46.5312887, time: Wed Jun 19 2019 11:04:41 GMT-0300 (Horário Padrão de Brasília)} "00:00:17"

#The check-out returns the time accounted for at the end.

the following technologies

Javascript
CSS3 or SCSS
HTML5
