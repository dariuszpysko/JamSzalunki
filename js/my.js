$(document).ready(function () {
    var pixelToMove = 80;
    $(".masthead").mousemove(function (e) {
        var width = $(this).innerWidth();
        var height = $(this).innerHeight();
        var newValueX = (e.pageX / width) * pixelToMove;
        var newValueY = (e.pageY / height) * pixelToMove;
        console.log("x: " + e.pageY);
        console.log("y: " + newValueY);
        $(this).css('background-position', newValueX + '%' + ' ' + newValueY + '%');
    });
});


$('.carousel').carousel({
    interval: 3000
});

$('.carousel').on('slide.bs.carousel', function () {
//alert("fcd");
})



        var myCenter = new google.maps.LatLng(54.348853, 18.716782999999964);
function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var marker = new google.maps.Marker({
        map: map,
        position: myCenter,
        title: 'Jam Szalunki Sp. z o.o.',
        animation: google.maps.Animation.DROP,
        // icon: image
    });
    //marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
 