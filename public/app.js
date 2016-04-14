angular.module('githubApp', ['ngTable'])
.controller('GithubController', function($scope, $http, $filter, NgTableParams) {
  $scope.githubTable = new NgTableParams({}, {
    getData: function($defer, params) {
      return $http.get('https://api.github.com/users/' + $scope.username + '/repos')
      .then(function (response) {
        var sortedData = $filter('orderBy')(response.data, params.orderBy());
        return sortedData;
      });  
    }
  });

  $scope.loadRepos = function() {
    $scope.githubTable.reload();
  }  
});    