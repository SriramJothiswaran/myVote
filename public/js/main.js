var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.showSearch = true;
  $scope.assemblyName = ["Jayal", "Khinwsar", "Makrana", "Nawan", "Ladnu", "Deedwana", "Nagaur", "Merta", "Degana", "Parbatsar"];
  $scope.designation = ["DEO", "Flying Squad","Sector Officer","Observer","BLO","Supervisor"];
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


    if ($scope.selectedDesignation === "BLO") {
      $http({
        method: 'GET',
        url: 'public/json/nagoor.json'
      }).then(function(response) {
        $scope.showSearch = false;
        $scope.showBLO = true
        $scope.bloData = response.data.data.filter(function(i, n) {
          return i.assemblyName === $scope.selectedName;
        });


      }, function(error) {
        alert('error occured while fetching data')
      });

    }

    if ($scope.selectedDesignation === "Supervisor") {
      $http({
        method: 'GET',
        url: 'public/json/nagoor.json'
      }).then(function(response) {
        $scope.showSearch = false;
        $scope.showSupervisor = true
        $scope.supervisorData = response.data.data.filter(function(i, n) {
          return i.assemblyName === $scope.selectedName;
        });


      }, function(error) {
        alert('error occured while fetching data')
      });

    }




  }

  $scope.goSearch = function(){
    $scope.showObserver = false;
    $scope.showSector = false;
    $scope.showSquad = false;
    $scope.showDEO = false;
    $scope.showBLO = false;
    $scope.showSupervisor = false;
    $scope.showSearch = true;
  }


});
