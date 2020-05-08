var geodataToMarkers = function(geodata) {
  var places = geodata;
  var markers = [];
  var len = places.length;
  for(var i=0; i<len; i++) {
    if(!(isNaN(places[i].latitude) |
    isNaN(places[i].longitude))) {
    place = {
        lat: places[i].latitude,
        lng: places[i].longitude,
        message: getMessage(places[i].school_name, i)
      }
      markers.push(place);
    }
  }
  return markers;
}


var getMessage = function(title, i) {
  var url = "#/schools/"+i.toString();
  return "<a target='_blank' href='" + url + "'>" + title + "</a>";
}
