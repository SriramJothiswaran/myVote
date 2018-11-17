var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.showSearch = true;
  $scope.assemblyName = ["Jayal", "Khinwsar", "Makrana", "Nawan", "Ladnu", "Deedwana", "Nagaur", "Merta", "Degana", "Parbatsar"];
  $scope.designation = ["DEO"];
  $scope.submitSearch = function() {
    if ($scope.selectedDesignation === "DEO") {
      $http({
        method: 'GET',
        url: 'public/json/contacts/deo.json'
      }).then(function(response) {
        $scope.showSearch = false
        $scope.deoData = response.data
      }, function(error) {
        alert('error occured while fetching data')
      });

    }
  }

  app.filter('myTableFilter', function() {

    return function(dataArray, searchTerm) {
      if (!dataArray) {
        return;
      }
      else if (!searchTerm) {
        return dataArray;
      }
      else {
        var term = searchTerm.toLowerCase();
        return dataArray.filter(function(item) {
          var termInId = item.id.toLowerCase().indexOf(term) > -1;
          var termInName = item.name.toLowerCase().indexOf(term) > -1;
          return termInId || termInName;
        });
      }
    }
  });

});
