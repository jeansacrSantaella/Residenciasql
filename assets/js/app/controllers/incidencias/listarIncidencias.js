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
  
    $scope.desactivarIncidencia= function($id){
      alertify.confirm('¿Desea Marcar como revisado?', 
      function(){ 
        $scope.desactivar($id);}, ).setHeader('<em>Confirmar actualización de estado </em> ');
    };
    $scope.desactivar=function($id){
      $http.post('/incidencias/revisado',{
        id:$id
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        $scope.refresh();
        alertify.success('Incidencia actualizada.');
      }, function error(err){
        alertify.error('No se pudo cambiar estado.');
        console.log('Error al moificar:', err);
      }
    );       
    }




  }]);
  