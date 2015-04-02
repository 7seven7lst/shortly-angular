angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  //{url: whateverwetypedin}
  $scope.addLink = function() {
    console.log($scope.link.url)
    Links.postLink($scope.link)
    .then(function(data) {
       $location.path('/links');
     })
  }
});