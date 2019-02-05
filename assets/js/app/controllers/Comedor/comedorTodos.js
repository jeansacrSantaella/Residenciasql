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
        $http.post('/comedor/busqueda',{tipo:$scope.tipo,genero:$scope.genero,disciplina:$scope.disciplina}).then(
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

      $scope.desactivar= function($id){
        alertify.confirm('Desea desactivar invitado?', 
        function(){ 
          $scope.desactivarInvitado($id);}, ).setHeader('<em>Confirmar Desautorización de Comedor </em> ');
      };
  
      $scope.desactivarInvitado=function($id){
        $http.post('/invitado/desactivar',{id:$id}).then(
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
          $scope.tipo=$valor;
          $scope.refresh();
      };
      $scope.opcionGenero=function($valor){
          $scope.genero=$valor;
          $scope.refresh();
      };
      $scope.opcionDisciplina=function($valor){
          $scope.disciplina=$valor;
          $scope.refresh();
      };

      $scope.realizarRespaldo=function(){

        $http.post('/otro/backup').then(
          function success(response) {
            console.log('Respuesta de backup', response);
            if (response.data) {
              $scope.deportistas = response.data;
            }
          },
          function error(error) {
            alertify.error('Se produjo un error el backup');
            console.log('error al obtener backup:', error);
          }
        );
      };

}]);
