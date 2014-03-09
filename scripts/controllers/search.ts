/// <reference path='../refs.ts'/>

module auction.controllers {
  'use strict';

  export class SearchController {
    static $inject = ['$scope', '$http', '$location'];

    constructor($scope, $http, $location) {
      $http.get('api/search.json')
        .then(function(res){
          $scope.searchResults = res.data;
        });
      }
    }

    angular.module('auction').controller('SearchController', SearchController);
}