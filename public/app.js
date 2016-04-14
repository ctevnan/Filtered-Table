angular.module('githubApp', ['ngTable'])
.controller('GithubController', function($scope, $http, NgTableParams) {
  $scope.githubTable = new NgTableParams({}, {
    getData: function($defer, params) {
      $http.get('https://api.github.com/users/' + $scope.username + '/repos')
      .then(function (response) {
        return response.data;
      });  
    }
  });

  $scope.loadRepos = function() {
    $scope.githubTable.reload();
  }  
});    