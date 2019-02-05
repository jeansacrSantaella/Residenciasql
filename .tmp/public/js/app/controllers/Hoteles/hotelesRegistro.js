ng.controller('registrarHotelController', ['$scope', '$http', '$routeParams', '$location', 
  function($scope, $http, $routeParams, $location) {

    /*
      1.- ir por el staff que me indica $routeParams.curp
    */
    $scope.$on('$viewContentLoaded', () => {
      $scope.staff = {};
        if($routeParams.id!=='nuevo'){
        $http.post('/hoteles/uno',{id:$routeParams.id}).then(
          function success(response){
            console.log('respuesta de obtener staff:', response);
            if(response.data && response.data.id){
              $scope.hotel = response.data;
              
            }
          },
          function error(error){
          //alertify.error('Se produjo un error al obtener al miembro del staff.');
          //console.log('error al obtener personal de apoyo:', error);
          }
        );
      }
     });
    
      $scope.guardarHotel= function(){
        $http.post('/hoteles/guardar',{hotel:$scope.hotel}).then(
          function success(response){
            console.log('Resultado de guardar:', response);
            $location.path('/hoteles/asignacion');
            alertify.success('Edicion completa.');
          }, function error(err){
            alertify.error('No se pudo guardar.');
            console.log('Error al guardar:', err);
          }
        );
      };
    }]);
    
  
