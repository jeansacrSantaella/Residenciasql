ng.controller('todosUsuarios', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {
  
    $scope.$on('$viewContentLoaded', () => {
      $scope.usuarios = [];
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/usuarios/listar').then(
        function success(response) {
          console.log('Respuesta de obtener todos los Usuarios:', response);
          if (response.data) {
            $scope.usuarios = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los usuarios o no existen.');
          console.log('error al obtener Usuario:', error);
        }
      );
    };

    $scope.desactivarUsuario= function($curp){
      /*$http.post('/deportistas/activar',{
          curp:$curp
      }).then(
        function success(response){
          console.log('Resultado de guardar:', response);
          alertify.success('Activación completa.');
        }, function error(err){
          alertify.error('No se pudo activar.');
          console.log('Error al activar:', err);
        }
      );$scope.refresh();*/
      alertify.confirm('Desea desactivar usuario?', function(){ alertify.success('Se desactivo el usuario') }, function(){ alertify.error('Error al guardar datos')});
    };
  
  }]);
  