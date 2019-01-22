ng.controller('incidenciaController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

    
    $scope.$on('$viewContentLoaded', () => {
       $scope.entreandor = {};
       if($routeParams.id!=='nuevo'){
         $http.post('/incidencias/uno',{id:$routeParams.id}).then(
           function success(response){
             console.log('respuesta de obtener incidencia:', response);
             if(response.data && response.data.id){
               $scope.incidencia = response.data;
             }
           },
           function error(error){
             alertify.error('Se produjo un error al obtener la incidencia.');
             console.log('error al obtener la incidencia:', error);
           }
         );
       }
     });
   
     $scope.guardarIncidencia= function(){
         console.log('entrando...');
       $http.post('/incidencias/guardar',{incidencia:$scope.incidencia}).then(
         function success(response){
           console.log('Resultado de guardar:', response);
           $location.path('/incidencias');
           alertify.success('Edicion completa.');
         }, function error(err){
           alertify.error('No se pudo guardar.');
           console.log('Error al guardar:', err);
         }
       );
     };
   
   }]);
   