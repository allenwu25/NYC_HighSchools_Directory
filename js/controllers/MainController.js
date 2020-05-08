app.controller('MainController',['$scope', 'get_json', function($scope, get_json) {
  $scope.mapCenter = {
    lat: 40.741934,
    lng: -73.84897,
    zoom: 11
  };
  get_json.success(function(data) {

    $scope.geodata=data;
    var len = $scope.geodata.length;
    for (var i = 0; i<len; i++ ) {
      $scope.geodata[i]['ind'] = i;
    }
    $scope.mapMarkers = geodataToMarkers($scope.geodata);


})}]);
