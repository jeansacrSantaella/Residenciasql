ng.controller('auxiliaresController', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {
  
    $scope.$on('$viewContentLoaded', () => {
      $scope.auxiliares = [];
      $scope.currentPage = 0;
      $scope.pages=[];
      $scope.pageSize = 10;
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/auxiliares/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los entrenadores activados:', response);
          if (response.data) {
            $scope.auxiliares = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los auxiliares o no existen.');
          console.log('error al obtener auxiliares validados:', error);
        }
      );
    };

    $scope.desactivarAuxiliar= function($id){
      alertify.confirm('Desea desactivar auxiliar?', 
      function(){ 
        $scope.desactivar($id);}, );
    };

    $scope.desactivar=function($id){
      $http.post('/auxiliares/desactivar',{
        id:$id
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        $scope.refresh();
        alertify.success('Desactivación completa.');
      }, function error(err){
        alertify.error('No se pudo desactivar.');
        console.log('Error al Desactivar:', err);
      }
    );       
    }
  
  }]);
  