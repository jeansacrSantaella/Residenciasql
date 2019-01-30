ng.controller('todosComedor', ['$scope', '$http','$timeout','$routeParams', 
    function($scope, $http, $timeout,$routeParams) {
  
      $scope.$on('$viewContentLoaded', () => {
        $scope.deportistas = [];
        $scope.refresh();
      });
    $scope.refresh = function() {
        $http.get('/deportistas/listartodo').then(
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

      $scope.desactivarDeportista= function($curp){
        alertify.confirm('Desea desactivar participante?', 
        function(){ 
          $scope.desactivar($curp);}, );
      };
  
      $scope.desactivar=function($curp){
        $http.post('/deportistas/desactivar',{
          curp:$curp
      }).then(
        function success(response){
          console.log('Resultado de guardar:', response);
          $scope.refresh();
          alertify.success('Desactivación completa.');
        }, function error(err){
          alertify.error('No se pudo desactivar.');
          console.log('Error al Desactivar:', err);
        }
      );       
      }
  

}]);
