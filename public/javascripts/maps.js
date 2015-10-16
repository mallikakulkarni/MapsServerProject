/**
 * Created by mallika on 10/14/15.
 */

var retailimage = {
    url: '/images/Green-Flag.png',
    size: new google.maps.Size(30, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};
var callcenterimage = {
    url: '/images/Blue-flag.png',
    size: new google.maps.Size(30, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};
var hqimage = {
    url: '/images/White-flag.png',
    size: new google.maps.Size(30, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};
var distfacimage = {
    url: '/images/Red-flag.png',
    size: new google.maps.Size(30, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
};
function initMap() {
    var map = new google.maps.Map(document.getElementById('google-map-container'), {
        center: new google.maps.LatLng(37.5,-122),
        scrollwheel: false,
        zoom: 8,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    });
    for (i = 0; i < locationData.locations.location.length; i++) {
        var location = locationData.locations.location[i];
        var image;
        if (location.type === 'RetailLocation') {
            image = retailimage;
            var fillColor = location.$revenue > 10000000 ? '#00FFFF' : location.$revenue > 5000000 ? '#9900CC' : '#CC0000';
            var fillOpacity = location.$revenue > 10000000 ? 0.35 : location.$revenue > 5000000 ? 0.75 : 1;
            var revenueCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: fillColor,
                fillOpacity: fillOpacity,
                map: map,
                center: new google.maps.LatLng(location.latitude, location.longitude),
                radius: Math.sqrt(location.$revenue)*4
            });
            revenueCircle.setMap(map);
        } else if (location.type === 'Distribution Facility'){
            image = callcenterimage;
        } else if (location.type === 'HeadQuarters') {
            image = hqimage;
        } else {
            image = distfacimage;
        }
        var marker=new google.maps.Marker({
            position:new google.maps.LatLng(location.latitude, location.longitude),
            icon:image
        });
        marker.setMap(map);
    }
}