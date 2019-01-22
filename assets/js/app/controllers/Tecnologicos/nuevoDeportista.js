ng.controller('nuevoDeportista', ['$scope', '$http','$timeout','$routeParams','$location','Upload', 
function($scope, $http, $timeout,$routeParams,$location,Upload) {

  $scope.$on('$viewContentLoaded', () => {
    $scope.respuesta=[];
    $scope.nombreTec=$routeParams.nombreTec;
  });

      $scope.guardarDeportista= function(){
        $http.post('/deportistas/guardarTecnologico',{deportista:$scope.deportista}).then(
          function success(response){
            console.log('Resultado de guardar:', response);
            $location.path('/deportistas').remplace();
            alertify.success('Edicion completa.');
          }, function error(err){
            alertify.error('No se pudo guardar.');
            console.log('Error al guardar:', err);
          }
        );
      };
    
    $scope.subiendoFoto = false;
    $scope.subirFoto = function(file){
      if (!file) {
        return;
      }
      $scope.subiendoFoto = true;
      $scope.porcentaje=0;
      var carga = {
        url: '/deportistas/subir-foto',
        data: {
          file: file,
          deportistacurp: $scope.deportista.curp
        }
      };

  


      Upload.upload(carga).then((resp) => {
        console.log('deportistaController->subirFoto->response: ', resp);
        $scope.subiendoFoto = false;
        if(resp.data.result){
          $scope.deportista.foto = true;
          $scope.r = Math.random();
        }else{
          alertify.error('No se pudo subir la imagen.');
        }
      }, (resp) => {
        console.log('deportistaController->subirFoto->error: ', resp);
        alertify.error('Error al subir la imagen.');
        $scope.subiendoFoto = false;
      }, (evt) => {
        $timeout(() => {
          $scope.porcentaje = parseInt(100.0 * evt.loaded / evt.total);
        })
      });
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
}
});

    
    