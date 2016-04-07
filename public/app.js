angular.module('filteredtableApp', [])
.controller('filteredtableController', function($scope, $http) {

  $scope.loadRepos = function() {
    $http.get('https://api.github.com/users/' + $scope.username + '/repos')
    .then(function(response) {
      $scope.repos = response.data;
    });
  }
});