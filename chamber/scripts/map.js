function initMap() {

    const location = { lat: 39.710317425128416, lng: -111.83563368897097 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  window.initMap = initMap;