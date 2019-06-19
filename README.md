<h1>#Timetrack</h1>
<p>
It is a simple application to count the hours with assisted geolocation. This project was designed in response to a Mywork challenge.
</p>

<h1>Features</h1>

<li>When you check-in;</li> 
 <p> this requests authorization to monitor the geolocation</p>

<li>When allowed;</li>
<p>the timer counts the hours and while monitoring the geolocation.</li>

<li>If you quit geofence or are out of coverage, you automatically apply the checkout and if the monitoring is denied the hour count is revoked.</li>

<li>On each check-in and check-out an object is returned on the Console with this format;</li>

<li>IN</li>
<p></p>
<p>{lat: -23.745885899999998, lng: -46.5312887, time: Wed Jun 19 2019 11:04:39 GMT-0300 (Horário Padrão de Brasília)}</p>
<p></p>
<li>OUT</li>
<p>The check-out returns the time accounted for at the end.<p>
<p></p>
<p>{lat: -23.745885899999998, lng: -46.5312887, time: Wed Jun 19 2019 11:04:41 GMT-0300 (Horário Padrão de Brasília)} "00:00:17"</p>



<h1>The following technologies</h1>

<li>HTML5</li>
<li>Javascript</li>
<li>CSS3 or SCSS</li>

<h1>Instructions</h1>
<li>Keep your browser open and allow the location to count the hours.</li>

