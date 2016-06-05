var app = angular.module('testApp', [])

.controller('mainCtrl', function($scope, mainSvc) {

  $scope.getData = function() {
    mainSvc.getData($scope.searchTerm).then(function(res){
      console.log(res);
      $scope.data = res;
    });


  }

})

.service("mainSvc", function($http, $q){

  this.getData = function(searchTerm){
    var defer = $q.defer();

    $http({
      method: "GET",
      url: "http://swapi.co/api/people/1"
    }).then(function(res){
      defer.resolve(res.data)
    })

    return defer.promise;
  }

});
