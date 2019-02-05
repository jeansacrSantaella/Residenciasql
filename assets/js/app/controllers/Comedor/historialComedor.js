ng.controller('historialComedor', ['$scope', '$http',
    function($scope, $http) {    

      $scope.$on('$viewContentLoaded', () => {
        $scope.historial = [];
        $scope.disciplina="TODAS";
        $scope.hora="TODAS";
        $scope.dia="TODAS"
        $scope.refresh();
      });

      $scope.refresh = function() {
        $http.post('/comedor/historialComedor',{dia:$scope.dia,horaAcceso:$scope.hora,disciplina:$scope.disciplina}).then(
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

}]);
