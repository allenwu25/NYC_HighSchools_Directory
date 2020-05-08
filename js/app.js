var app = angular.module('NYC_Schools_App', ['leaflet-directive','ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'js/views/main.html'
  })
  .when('/about', {
    controller: 'AboutController',
    templateUrl: 'js/views/about.html'
  })
  .when('/schools/:id', {
    controller: 'SchoolController',
    templateUrl: 'js/views/school.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
