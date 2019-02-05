ng.controller('historialComedor', ['$scope', '$http','$routeParams',
    function($scope, $http,$routeParams) {    

      $scope.$on('$viewContentLoaded', () => {
        $scope.historial = [];
        $scope.disciplina="TODAS";
        $scope.tipo="TODAS";
        $scope.fechaAcceso="TODAS"
        $scope.refresh();
      });

      $scope.refresh = function() {
        $http.post('/comedor/historial',{fechaAcceso:$scope.fechaAcceso,tipo:$scope.tipo,disciplina:$scope.disciplina}).then(
          function success(response) {
            console.log('Respuesta de obtener todos los invitados:', response);
            if (response.data) {
              $scope.historial = response.data;
            }
          },
          function error(error) {
            alertify.error('Se produjo un error al obtener los invitados.');
            console.log('error al obtener invitados:', error);
          }
        );
      };
      $scope.opcionDisciplina=function($valor){
        $scope.disciplina=$valor;
        $scope.refresh();
      };
      $scope.dia=function($valor){
        $scope.fechaAcceso=$valor;
        $scope.refresh();
      };
      $scope.tipoSelect=function($valor){
        $scope.tipo=$valor;
        $scope.refresh();
      };

}]);
