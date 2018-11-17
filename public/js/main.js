var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
    $scope.showSearch = true;
    $scope.assemblyName = ["Jayal","Khinwsar","Makrana","Nawan","Ladnu","Deedwana","Nagaur","Merta","Degana","Parbatsar"];
    $scope.designation = ["DEO"];
    $scope.submitSearch = function(){
      if ($scope.selectedDesignation === "DEO") {
        $http({
              method: 'GET',
              url: 'public/json/contacts/deo.json'
           }).then(function (response){
             $scope.showSearch = false
             $scope.deoData = response.data
           },function (error){
              alert('error occured while fetching data')
           });

      }
    }

});
