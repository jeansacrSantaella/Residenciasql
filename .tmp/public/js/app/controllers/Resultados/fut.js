ng.controller('futController', ['$scope', '$http','$timeout','$routeParams', 
    function($scope, $http, $timeout,$routeParams) {

    $scope.$on('$viewContentLoaded', () => {
      $scope.games = [];
      $scope.genero="M"; //Masculino Femenil
      $scope.refresh();
    });
  
    $scope.refresh = function() {
        if($scope.genero==="M"){
            $http.post('/juegos/resultados',{disciplina:"FUTBOL",genero:"M",jornada:"J1"}).then(
                function success(response) {
                  console.log('Respuesta de obtener todos los resultados:', response);
                  if (response.data) {
                    $scope.games = response.data;
                  }
                },
                function error(error) {
                  alertify.error('Se produjo un error al obtener los resultados.');
                  console.log('error al obtener Resultados:', error);
                }
              );
        }
      
    };

    }]);
