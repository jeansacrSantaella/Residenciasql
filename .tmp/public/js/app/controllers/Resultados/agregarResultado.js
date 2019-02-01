ng.controller('agregarResultado', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

    $scope.$on('$viewContentLoaded', () => {
      $scope.games = [];
      $scope.genero="M"; //Masculino Femenil
      $scope.jornada="J1";
      $scope.genero="M";
      $scope.disciplina="FUTBOL";
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
        else if($scope.opcJornada===6)
            $scope.jornada="J4";
        else if($scope.opcJornada===7)
            $scope.jornada="J5";
        else if($scope.opcJornada===4)
            $scope.jornada="S";
        else if($scope.opcJornada===5)
            $scope.jornada="F";    
            console.log($scope.jornada);
        $scope.refresh();
      };

      $scope.editarResultado=function($id){
        $http.post('/juegos/actualizar',{id:$id}).then(
            function success(response){
              console.log('Resultado de guardar:', response);
              $scope.refresh();
              //alertify.success('Resultado Guardado.');
            }, function error(err){
              //alertify.error('No se pudo Guardar.');
              console.log('Error al Guardar:', err);
            }
          );       
      };
      $scope.guardarResultado= function($id,$r1,$r2){
          $scope.guardar($id,$r1,$r2);
      };
  
      $scope.guardar=function($id,$r1,$r2){
        $http.post('/juegos/guardar',{id:$id,resultado1:$r1,resultado2:$r2}).then(
        function success(response){
          console.log('Resultado de guardar:', response);
          $scope.refresh();
          alertify.success('Resultado Guardado.');
        }, function error(err){
          alertify.error('No se pudo Guardar.');
          console.log('Error al Guardar:', err);
        }
      );       
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
            console.log('error al obtener resultados:', error);
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
