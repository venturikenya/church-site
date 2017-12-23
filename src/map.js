function initMap() {
  var lifegroup = {lat: -1.283572, lng: 36.759583};
  var church = {lat: -1.285055, lng: 36.757901};
  var myOptions = {
    zoom: 10,
    center: church
  }
  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var marker = new google.maps.Marker({
      position: lifegroup,
      map: map
  });
  var map2 = new google.maps.Map(document.getElementById("church"), myOptions);
  var marker2 = new google.maps.Marker({
      position: church,
      map: map2
  });
}
