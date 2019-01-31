ng.controller('futController', ['$scope', '$http','$routeParams',
    function($scope, $http,$routeParams) {

    $scope.$on('$viewContentLoaded', () => {
      $scope.games = [];
      $scope.genero="M"; //Masculino Femenil
      $scope.jornada="J1";
      //$scope.disciplina="FUTBOL";
      $scope.genero="M";
      $scope.refresh();
      $scope.opc=2;
      $scope.opcJornada=1;
      $scope.disciplina=$routeParams.disciplina;
    });

    $scope.OpcionJornada=function($opcJornada){
        document.getElementById($scope.jornada).style.color="#000000"; 
        $scope.opcJornada=$opcJornada;
        if($scope.opcJornada===1)
            $scope.jornada="J1";
        else if($scope.opcJornada===2)
            $scope.jornada="J2";
        else if($scope.opcJornada===3)
            $scope.jornada="J3";
        else if($scope.opcJornada===4)
            $scope.jornada="S";
        else if($scope.opcJornada===5)
            $scope.jornada="F";    
            console.log($scope.jornada);
        $scope.refresh();
      };

    $scope.refresh = function() {
        $scope.disciplina=$routeParams.disciplina;
        document.getElementById($scope.jornada).style.color="#4747e6"; 
            $http.post('/juegos/resultados',{disciplina:$scope.disciplina,genero:$scope.genero,jornada:$scope.jornada}).then(
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
        };

    $scope.opcion=function($opc){
        $scope.opc=$opc;
        if($scope.opc===1)
            $scope.genero="F";
        else if($scope.opc===2)
            $scope.genero="M";
        $scope.refresh();
    }
    }]);
