ng.controller('deportistasController', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {

    $scope.$on('$viewContentLoaded', () => {
      $scope.deportistas = [];
      $scope.currentPage = 0;
      $scope.pages=[];
      $scope.pageSize = 10;
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/deportistas/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los deportista:', response);
          if (response.data) {
            $scope.deportistas = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los deportistas.');
          console.log('error al obtener deportistas:', error);
        }
      );
    };
  
    $scope.borrar = function(deportista) {
      alertify.confirm('Borrar Deportista', '¿Está Seguro que desea eliminar a '+deportista.nombre+'?', () => {
        $http.post('/deportistas/borrar', {
          id: deportista.id
        }).then(
          function success(response) {
            console.log('Resultado de borrar:', response);
            $timeout(() => {
              $scope.refresh();
            });
            alertify.success('Borrado satisfactorio.');
          },
          function error(err) {
            alertify.error('No se pudo borrar el deportista.');
            console.log('Error al guardar:', err);
          }
        );
      }, () => {});
    };

    $scope.desactivarDeportista= function($curp){
      alertify.confirm('Desea desactivar Deportista?', 
      function(){ 
        $scope.desactivar($curp);}, ).setHeader('<em>Confirmar Desactivación </em> ');
    };

    $scope.desactivar=function($curp){
      $http.post('/deportistas/desactivar',{
        curp:$curp
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        $scope.refresh();
        alertify.success('Desactivado completa.');
      }, function error(err){
        alertify.error('No se pudo desactivar.');
        console.log('Error al Desactivar:', err);
      }
    );       
    }

  

  }]);
  