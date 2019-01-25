ng.controller('principalResultados', ['$scope', function($scope) {

    $scope.$on('$viewContentLoaded', () => {
        $scope.refresh();
      });

    $scope.GuardarEncuentro= function(){
        //alertify.confirm('Desea marcar como revisada?', function(){ alertify.success('Se modifico el estado de la incidencia') }, function(){ alertify.error('Error al modificar estado')});
        alertify.success('Se agreo exitosamente el encuentro');
        //alertify.error('Error en los datos');
      };
}]);
