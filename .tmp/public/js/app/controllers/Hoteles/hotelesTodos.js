ng.controller('todosHotelesController', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {
  
    $scope.$on('$viewContentLoaded', () => {
      $scope.hoteles = [];
      $scope.refresh();
    });
  
    $scope.refresh = function() {
      $http.get('/hoteles/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los Hoteles:', response);
          if (response.data) {
            $scope.hoteles = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los hoteles o no existen.');
          console.log('error al obtener hoteles:', error);
        }
      );
    };
  
  }]);
  