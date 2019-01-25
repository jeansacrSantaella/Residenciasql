ng.controller('staffsController', ['$scope', '$http','$timeout', function($scope, $http, $timeout) {

    /*
      1.- ir por mis staffs activos
      2.- listarlos
      3.- cuando le den click a uno, abrirlo
      4.- opcion de inhabilitarlo
    */
  
    $scope.$on('$viewContentLoaded', () => {
      $scope.staffs = [];
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/staff/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todo el personal de apoyo:', response);
          if (response.data) {
            $scope.staffs = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener el personal de apoyo.');
          console.log('error al obtener staffs:', error);
        }
      );
    };
  
    $scope.borrar = function(staff) {
      alertify.confirm('Borrar Staff', '¿Está Seguro que desea eliminar a '+staff.nombre+'?', () => {
  
        $http.post('/staff/borrar', {
          id: staff.id
        }).then(
          function success(response) {
            console.log('Resultado de borrar:', response);
            $timeout(() => {
              $scope.refresh();
            });
            alertify.success('Borrado satisfactorio.');
          },
          function error(err) {
            alertify.error('No se pudo borrar el personal de apoyo.');
            console.log('Error al guardar:', err);
          }
        );
      }, () => {});
    };
  }]);
  