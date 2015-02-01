// When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatLng = new google.maps.LatLng(-7.966456, 112.6155250);

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: myLatLng,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-location');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'here Iam'
    });
}


$(document).ready(function(){
    $("#gallery .frame").fancybox({});

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if ((target == '#contact')) {
            init();
        } else if(target == "work"){
            
        }
    });
    
    $(document).on("click", "#filter a", function(){
        $("#filter a").removeClass("active");
        $(this).addClass("active");
        
        var dataType = $(this).attr("data-type");
        
        if(dataType == 'all') {
            $('#gallery > div.hidden').fadeIn('slow').removeClass('hidden');
        } else {
            $("#gallery > div").each(function() {
                if($(this).attr("data-type").toLowerCase() !== dataType.toLowerCase()) {
                    $(this).fadeOut('normal').addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
        
        return false;
    });
});