ng.controller('todosComedor', ['$scope', '$http',
    function($scope, $http) {
  
      $scope.$on('$viewContentLoaded', () => {
        $scope.deportistas = [];
        $scope.disciplina="TODAS";
        $scope.genero="AMBAS";
        $scope.tipo="TODOS"
        $scope.refresh();
      });
    $scope.refresh = function() {
        $http.get('/comedor/busqueda',{tipo:$scope.tipo,genero:$scope.genero,disciplina:$scope.disciplina}).then(
          function success(response) {
            console.log('Respuesta de obtener todos los invitados:', response);
            if (response.data) {
              $scope.deportistas = response.data;
            }
          },
          function error(error) {
            alertify.error('Se produjo un error al obtener los invitados.');
            console.log('error al obtener invitados:', error);
          }
        );
      };

      $scope.desactivarDeportista= function($curp){
        alertify.confirm('Desea desactivar invitado?', 
        function(){ 
          $scope.desactivar($curp);}, );
      };
  
      $scope.desactivar=function($curp){
        $http.post('/invitado/desactivar',{
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
      };

      $scope.opcionTipo=function($valor){
          $scope.tipo="TODOS";
          $scope.refresh();
      };
      $scope.opcionGenero=function($valor){
          $scope.genero="M";
          $scope.refresh();
      };
      $scope.opcionDisciplina=function($valor){
          $scope.disciplina="$valor";
          $scope.refresh();
      };

}]);
