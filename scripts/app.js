'use strict';
//angular.module('auction', []);

var auctionApp = angular.module('auction', ['ngRoute']);

auctionApp.config(['$routeProvider',
  function($routeProvider)
  {
    $routeProvider
      .when('/',
      {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/mainPage',
      {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/searchResult',
      {
        templateUrl: 'views/searchResult.html',
        controller: 'SearchController'
      })
      .otherwise(
      {
        redirectTo: '/mainPage'
      }); 
  }]);
auctionApp.controller('MainController', ['$scope', '$location', function ($scope, $location) {
    $scope.showSearch = true;
    $scope.submit = function() {
        $location.path('/search');
    }
}]);
auctionApp.controller('SearchController', function($scope)
{
  $scope = 'Search';
});
