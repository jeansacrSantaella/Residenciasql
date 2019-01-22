ng.controller('tecnologicoController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

  /*
    1.- ir por el alumno que me indica $routeParams.id
  */

  
    $scope.guardarTec= function(){
      $http.post('/tecnologicos/guardar',{tecnologico:$scope.tecnologico}).then(
        function success(response){
          console.log('Resultado de guardar:', response);
          $location.path('/tecnologicos');
          alertify.success('Edicion completa.');
        }, function error(err){
          alertify.error('No se pudo guardar.');
          console.log('Error al guardar:', err);
        }
      );
    };
  
  }]);
  