function initMap() {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 33.30, lng: -111.84}
        });
        directionsRenderer.setMap(map);

        var onClickHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsRenderer);
        };
        document.getElementById('start').addEventListener('click', onClickHandler);
      }

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
          origin: {query: 'Scottsdale, AZ'},
          destination: {query: 'Las Vegas, NV'},
          travelMode: 'DRIVING'
        },
        function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
  }
