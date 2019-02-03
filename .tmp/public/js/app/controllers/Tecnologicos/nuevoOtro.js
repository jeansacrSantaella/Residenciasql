ng.controller('nuevoOtro', ['$scope', '$http','$timeout','$routeParams','$location','Upload', 
function($scope, $http, $timeout,$routeParams,$location,Upload) {

  $scope.$on('$viewContentLoaded', () => {
    $scope.respuesta=[];
    $scope.nombreTec=$routeParams.nombreTec;
    console.log($scope.nombreTec);
  });

      $scope.guardarOtro= function(){
        $scope.auxiliar.tecOrigen=$scope.nombreTec;
        $http.post('/auxiliares/guardar',{auxiliar:$scope.auxiliar}).then(
          function success(response){
            if(response.data==='undefined')
                alertify.error('Ya existe.');
          else
                alertify.success('Se guardo de manera correcta');
          }, function error(err){
            alertify.error('Datos invalidos o vacios');
          }
        );
      };
  $scope.redirecciona=function(){
    $location.path('/tecnologicos/'+$scope.nombreTec).remplace();
  };
    
}]);

    
    