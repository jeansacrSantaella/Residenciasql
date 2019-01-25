ng.controller('dashboardController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
  $scope.$on('$viewContentLoaded', () => {
    console.log('dashboardController cargado');
    $scope.usuarios= [];
    $scope.refresh();
  });

  $scope.refresh = function(){
    $http.get('/usuarios/get-all').then(
      function succcess(response){
        if(response.data.length){
          $scope.usuarios = response.data;
        }
      },
      function error(err){
        console.log('Sucedió un error el obtener los usuarios', err);
      }
    );
  };
}]);
