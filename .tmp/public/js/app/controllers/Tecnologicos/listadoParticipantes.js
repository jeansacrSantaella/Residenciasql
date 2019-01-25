ng.controller('listadoParticipantes', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {
      
   $scope.$on('$viewContentLoaded', () => {
    $scope.respuesta = [];
    $scope.nombreTec=$routeParams.tecProcedencia;
    $scope.opc=2;
    $scope.refresh();
    $scope.respuesta = [];
    console.log($scope.opc);

  });

  $scope.refresh = function() {
    if($scope.opc===2){
      $http.post('/deportistas/todos-tec',{tecProcedencia:$routeParams.tecProcedencia}).then(
      function success(response) {
        console.log('Respuesta de obtener todos los deportista:', response);
        if (response.data) {
          $scope.respuesta = response.data;
        }
      },
      function error(error) {
        alertify.error('Se produjo un error al obtener los deportistas.');
        console.log('error al obtener deportistas:', error);
      }
    );
    }else if($scope.opc===1){
        $http.post('/auxiliares/entrenadores-tec',{tecProcedencia:$routeParams.tecProcedencia}).then(
      function success(response) {
        console.log('Respuesta de obtener todos los Auxiliares:', response);
        if (response.data) {
          console.log(response.data);
          $scope.respuesta = response.data;
        }
      },
      function error(error) {
        alertify.error('Se produjo un error al obtener los Auxiliares.');
        console.log('error al obtener Auxiliares:', error);
      }
    );
    }else if($scope.opc===3){
      $http.post('/auxiliares/otros-tec',{tecProcedencia:$routeParams.tecProcedencia}).then(
        function success(response) {
          console.log('Respuesta de obtener todos los Auxiliares:', response);
          if (response.data) {
            $scope.respuesta = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los Auxiliares.');
          console.log('error al obtener Auxiliares:', error);
        }
      );
    }
    
  };

  $scope.opcion=function($opc){
    $scope.opc=$opc;
    $scope.refresh();

  }

  $scope.activarDeportista= function($curp){
    $http.post('/deportistas/activar',{
        curp:$curp
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        alertify.success('Activación completa.');
      }, function error(err){
        alertify.error('No se pudo activar.');
        console.log('Error al activar:', err);
      }
    );$scope.refresh();
  };

  $scope.activarAuxiliar= function($id){
    $http.post('/auxiliares/activar',{
        id:$id
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        alertify.success('Activación completa de auxiliar.');
      }, function error(err){
        alertify.error('No se pudo activar el auxiliar.');
        console.log('Error al activar:', err);
      }
    );$scope.refresh();
  };



}]);
