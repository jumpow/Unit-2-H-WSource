/// <reference path='../refs.ts'/>

module auction.controllers {
  'use strict';

  export class MainController {
    static $inject = ['$scope', '$http'];

    constructor($scope, $http) {
      $http.get('api/featured.json')
          .then(function(res){
          $scope.featured = res.data;
        });
      }
  }

  angular.module('auction').controller('MainController', MainController);
}
