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
      alertify.confirm('Desea Desactivar Usuario?',
       function(){
        $scope.desactivar($curp);}, );
    };

    $scope.desactivar=function($curp){
      $http.post('/usuarios/desactivar',{
        curp:$curp
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        $scope.refresh();
        alertify.success('Desactivado completa.');
      }, function error(err){
        alertify.error('No se pudo desactivar.');
        console.log('Error al Desactivar:', err);
      }
    );       
    }

    $scope.activarUsuario= function($curp){
      alertify.confirm('Desea Activar Usuario?',
       function(){
        $scope.activar($curp);}, );
    };

    $scope.ctivar=function($curp){
      $http.post('/usuarios/activar',{
        curp:$curp
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        $scope.refresh();
        alertify.success('Activación completa.');
      }, function error(err){
        alertify.error('No se pudo Activar.');
        console.log('Error al Activar:', err);
      }
    );       
    }
  
  }]);
  