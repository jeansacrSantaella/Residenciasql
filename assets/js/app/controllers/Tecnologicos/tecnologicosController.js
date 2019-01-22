ng.controller('tecnologicosController', ['$scope', '$http','$timeout','$routeParams', 
    function($scope, $http, $timeout,$routeParams) {

    $scope.$on('$viewContentLoaded', () => {
      $scope.tecnologicos = [];
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/tecnologicos/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los tecnologico:', response);
          if (response.data) {
            $scope.tecnologicos = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los tecnologicos.');
          console.log('error al obtener tecnologicos:', error);
        }
      );
    };
  
    $scope.borrar = function(tecnologico) {
      alertify.confirm('Borrar tecnologico', '¿Está Seguro que desea eliminar a '+tecnologico.nombre+'?', () => {
  
        $http.post('/tecnologicos/borrar', {
          id: tecnologico.id
        }).then(
          function success(response) {
            console.log('Resultado de borrar:', response);
            $timeout(() => {
              $scope.refresh();
            });
            alertify.success('Borrado satisfactorio.');
          },
          function error(err) {
            alertify.error('No se pudo borrar el tecnologico.');
            console.log('Error al guardar:', err);
          }
        );
      }, () => {});
    };
  }]);
  