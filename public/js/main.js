var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.showSearch = true;
  $scope.assemblyName = ["Jayal", "Khinwsar", "Makrana", "Nawan", "Ladnu", "Deedwana", "Nagaur", "Merta", "Degana", "Parbatsar"];
  $scope.designation = ["DEO", "Flying Squad","Sector Officer","Observer"];
  $scope.submitSearch = function() {
    if ($scope.selectedDesignation === "DEO") {
      $http({
        method: 'GET',
        url: 'public/json/contacts/deo.json'
      }).then(function(response) {
        $scope.showSearch = false;
        $scope.showDEO = true
        $scope.deoData = response.data
      }, function(error) {
        alert('error occured while fetching data')
      });

    }

    if ($scope.selectedDesignation === "Flying Squad") {
      $http({
        method: 'GET',
        url: 'public/json/contacts/flying.json'
      }).then(function(response) {
        $scope.showSearch = false;
        $scope.showSquad = true
        $scope.squadData = response.data.filter(function(i, n) {
          return i.assembly === $scope.selectedName;
        });


      }, function(error) {
        alert('error occured while fetching data')
      });

    }


    if ($scope.selectedDesignation === "Sector Officer") {
      $http({
        method: 'GET',
        url: 'public/json/contacts/sector.json'
      }).then(function(response) {
        $scope.showSearch = false;
        $scope.showSector = true
        $scope.sectorData = response.data.filter(function(i, n) {
          return i.assembly === $scope.selectedName;
        });


      }, function(error) {
        alert('error occured while fetching data')
      });

    }


    if ($scope.selectedDesignation === "Observer") {
      $http({
        method: 'GET',
        url: 'public/json/contacts/observer.json'
      }).then(function(response) {
        $scope.showSearch = false;
        $scope.showObserver = true
        $scope.observerData = response.data.filter(function(i, n) {
          return i.assembly === $scope.selectedName;
        });


      }, function(error) {
        alert('error occured while fetching data')
      });

    }


  }


});
