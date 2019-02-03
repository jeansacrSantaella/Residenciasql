ng.controller('calendarioController', ['$scope', '$http','$timeout','$routeParams',   
function($scope, $http) {
  
    $scope.$on('$viewContentLoaded', () => {
      $scope.eventos = [];
      $scope.disciplina="TODOS";
      $scope.jornada="J1";
      $scope.refresh();
      $scope.opcJornada=1;
      $scope.currentPage = 0;
      $scope.pages=[];
      $scope.pageSize = 10;
      
    });
  
    $scope.refresh = function() {
    document.getElementById($scope.jornada).style.color="#4747e6"; 
      $http.post('/calendario/eventos',{dia:$scope.jornada,disciplina:$scope.disciplina}).then(
        function success(response) {
          console.log('Respuesta de obtener todos los eventos del día:', response);
          if (response.data) {
            $scope.eventos = response.data;            
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener todos los eventos del día:');
          console.log('error al obtener eventos:', error);
        }
      );
    };
    $scope.OpcionJornada=function($opcJornada){
        document.getElementById($scope.jornada).style.color="#000000"; 
        $scope.opcJornada=$opcJornada;
        if($scope.opcJornada===1)
            $scope.jornada="J1";
        else if($scope.opcJornada===2)
            $scope.jornada="J2";
        else if($scope.opcJornada===3)
            $scope.jornada="J3";
        else if($scope.opcJornada===6)
            $scope.jornada="J4";
        else if($scope.opcJornada===7)
            $scope.jornada="J5";
        else if($scope.opcJornada===4)
            $scope.jornada="S";
        else if($scope.opcJornada===5)
            $scope.jornada="F";    
        else if($scope.opcJornada===8)
            $scope.jornada="SA";
        else if($scope.opcJornada===9)
            $scope.jornada="DO";        
            console.log($scope.jornada);
        $scope.refresh();
      };

    /*DISCIPLINAS */
    $scope.busqueda=function($valor){
        $scope.disciplina=$valor;
        $scope.currentPage=0;
        $scope.refresh();
    };
}]);