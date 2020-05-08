app.controller('SchoolController', ['$scope', 'get_json', '$routeParams',
function($scope, get_json, $routeParams) {

  get_json.success(function(data) {
$scope.md ="hiddddf";
    $scope.school = data[$routeParams.id];
    $scope.myind = $routeParams.id;
    var mydata = myConfig;
    mydata.series[0].values=[$scope.school.sat_avg];
    zingchart.render({
    	id : 'myChart',
    	data : mydata,
    	height: 400,
    	width: '100%'
    });
  });
}]);
