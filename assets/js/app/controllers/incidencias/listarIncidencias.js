ng.controller('incidenciasController', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {
  
    $scope.$on('$viewContentLoaded', () => {
      $scope.incidencias = [];
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/incidencias/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos las incidencias:', response);
          if (response.data) {
            $scope.incidencias = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener las incidencias.');
          console.log('error al obtener incidencias:', error);
        }
      );
    };
  
  }]);
  