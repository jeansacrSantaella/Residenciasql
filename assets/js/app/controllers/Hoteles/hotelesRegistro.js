ng.controller('registrarHotelController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

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
    
    
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.pages = [];

    $scope.configPages = function() {
      $scope.pages.length = 0;
      var ini = $scope.currentPage - 4;
      var fin = $scope.currentPage + 5;
      if (ini < 1) {
        ini = 1;
        if (Math.ceil($scope.usuarios.length / $scope.pageSize) > 10)
          fin = 10;
        else
          fin = Math.ceil($scope.usuarios.length / $scope.pageSize);
      } else {
        if (ini >= Math.ceil($scope.usuarios.length / $scope.pageSize) - 10) {
          ini = Math.ceil($scope.usuarios.length / $scope.pageSize) - 10;
          fin = Math.ceil($scope.usuarios.length / $scope.pageSize);
        }
      }
      if (ini < 1) ini = 1;
      for (var i = ini; i <= fin; i++) {
        $scope.pages.push({
          no: i
        });
      }

      if ($scope.currentPage >= $scope.pages.length)
        $scope.currentPage = $scope.pages.length - 1;
    };

    $scope.setPage = function(index) {
      $scope.currentPage = index - 1;
    };
  }
])

.filter('startFromGrid', function() {
return function(input, start) {
  start = +start;
  return input.slice(start);
}});
