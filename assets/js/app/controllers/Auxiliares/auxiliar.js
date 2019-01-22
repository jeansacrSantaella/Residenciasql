ng.controller('auxiliarController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

    
     $scope.$on('$viewContentLoaded', () => {
        $scope.entreandor = {};
        if($routeParams.id!=='nuevo'){
          $http.post('/auxiliares/uno',{id:$routeParams.id}).then(
            function success(response){
              console.log('respuesta de obtener auxiliar:', response);
              if(response.data && response.data.id){
                $scope.auxiliar = response.data;
              }
            },
            function error(error){
              alertify.error('Se produjo un error al obtener el entrenador.');
              console.log('error al obtener auxiliar:', error);
            }
          );
        }
      });
    
      $scope.guardarAuxiliar= function(){
        console.log('lol');
        $http.post('/auxiliares/guardar',{auxiliar:$scope.auxiliar}).then(
          function success(response){
            console.log('Resultado de guardar:', response);
            $location.path('/auxiliares');
            alertify.success('Edicion completa.');
          }, function error(err){
            alertify.error('No se pudo guardar.');
            console.log('Error al guardar:', err);
          }
        );
      };
    
    }]);
    