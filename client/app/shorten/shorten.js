angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.status='valid';
  //{url: whateverwetypedin}
  $scope.addLink = function() {
    $scope.loading=true;
    Links.postLink($scope.link)
    .then(function(data) {
       $scope.loading=false;
       $location.path('/links');
     })
    .catch(function(err){
      console.log(err);
    })
  }

  $scope.validateUrl = function(url) {
    if (!url || url ==='') {
      $scope.status= 'invalid';
      return 'please enter url';
    }
    else if ( url.match(/http(s)?\:\/\//) !== null
      ){
      $scope.status= 'valid';
      return 'valid';
    } else {
      $scope.status= 'invalid';
      return 'invalid';
    }
  }

  //$scope.isValid = function()

});