app.factory('get_json', ['$http', function($http) {
  return $http.get('https://nycschools-7ab8f.firebaseio.com/.json')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);
