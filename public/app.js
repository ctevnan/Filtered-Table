angular.module('githubApp', ['ngTable'])
.controller('GithubController', function($scope, $http, $filter, NgTableParams) {
  $scope.githubTable = new NgTableParams({
    orderby: {
      full_name: 'asc'
    }
  }, {
      $scope.loadRepos = function($defer, params) {
       return $http.get('https://api.github.com/users/' + $scope.username + '/repos')
       .then(function (response) {
        $scope.repos = response.data;
        var filteredData = $filter('filter')(repos, params.filter())
        var sortedData = $filter('orderBy')(filteredData, params.orderBy());
        return sortedData;
      });
    }
  });

  $scope.loadRepos = function() {
    $scope.githubTable.reload();
  }
});