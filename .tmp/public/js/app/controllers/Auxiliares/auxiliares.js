ng.controller('auxiliaresController', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {
  
    $scope.$on('$viewContentLoaded', () => {
      $scope.auxiliares = [];
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/auxiliares/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los entrenadores activados:', response);
          if (response.data) {
            $scope.auxiliares = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los auxiliares o no existen.');
          console.log('error al obtener auxiliares validados:', error);
        }
      );
    };
  
  }]);
  