ng.controller('deportistasController', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {

    $scope.$on('$viewContentLoaded', () => {
      $scope.deportistas = [];
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/deportistas/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los deportista:', response);
          if (response.data) {
            $scope.deportistas = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los deportistas.');
          console.log('error al obtener deportistas:', error);
        }
      );
    };
  
    $scope.borrar = function(deportista) {
      alertify.confirm('Borrar Deportista', '¿Está Seguro que desea eliminar a '+deportista.nombre+'?', () => {
  
        $http.post('/deportistas/borrar', {
          id: deportista.id
        }).then(
          function success(response) {
            console.log('Resultado de borrar:', response);
            $timeout(() => {
              $scope.refresh();
            });
            alertify.success('Borrado satisfactorio.');
          },
          function error(err) {
            alertify.error('No se pudo borrar el deportista.');
            console.log('Error al guardar:', err);
          }
        );
      }, () => {});
    };
  }]);
  