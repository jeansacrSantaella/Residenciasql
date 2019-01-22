ng.controller('alumnoController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

/*
  1.- ir por el alumno que me indica $routeParams.id
*/

  $scope.$on('$viewContentLoaded', () => {
    $scope.alumno = {};
    if($routeParams.id!=='nuevo'){
      $http.post('/alumnos/uno',{id:$routeParams.id}).then(
        function success(response){
          console.log('respuesta de obtener alumno:', response);
          if(response.data && response.data.id){
            $scope.alumno = response.data;
          }
        },
        function error(error){
          alertify.error('Se produjo un error al obtener el alumno.');
          console.log('error al obtener alumno:', error);
        }
      );
    }
  });

  $scope.guardar= function(){
    $http.post('/alumnos/guardar',{alumno:$scope.alumno}).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        $location.path('/alumnos');
        alertify.success('Edicion completa.');
      }, function error(err){
        alertify.error('No se pudo guardar.');
        console.log('Error al guardar:', err);
      }
    );
  };

}]);
