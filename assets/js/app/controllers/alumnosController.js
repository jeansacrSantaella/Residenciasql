ng.controller('alumnosController', ['$scope', '$http','$timeout', function($scope, $http, $timeout) {

  /*
    1.- ir por mis usuarios OK
    2.- listarlos
    3.- cuando le den click a uno, abrirlo
    4.- opcion de inhabilitarlo
  */

  $scope.$on('$viewContentLoaded', () => {
    $scope.alumnos = [];
    $scope.refresh();
  });

  $scope.refresh = function() {
    $http.get('/alumnos/todos').then(
      function success(response) {
        console.log('Respuesta de obtener todos los alumnos:', response);
        if (response.data) {
          $scope.alumnos = response.data;
        }
      },
      function error(error) {
        alertify.error('Se produjo un error al obtener los alumnos.');
        console.log('error al obtener alumnos:', error);
      }
    );
  };

  $scope.borrar = function(alumno) {
    alertify.confirm('Borrar Alumno', '¿Está Seguro que desea eliminar a '+alumno.nombre+'?', () => {

      $http.post('/alumnos/borrar', {
        id: alumno.id
      }).then(
        function success(response) {
          console.log('Resultado de borrar:', response);
          $timeout(() => {
            $scope.refresh();
          });
          alertify.success('Borrado satisfactorio.');
        },
        function error(err) {
          alertify.error('No se pudo borrar el alumno.');
          console.log('Error al guardar:', err);
        }
      );
    }, () => {});
  };
}]);
