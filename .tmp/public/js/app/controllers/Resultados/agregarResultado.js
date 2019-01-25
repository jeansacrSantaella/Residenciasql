ng.controller('agregarResultado', ['$scope', function($scope) {

    $scope.$on('$viewContentLoaded', () => {
        $scope.refresh();
      });

    $scope.guardaResultado= function(){
        //alertify.confirm('Desea marcar como revisada?', function(){ alertify.success('Se modifico el estado de la incidencia') }, function(){ alertify.error('Error al modificar estado')});
        alertify.success('Se agreo exitosamente el encuentro');
        //alertify.error('Error en los datos o campos vacios');
      };
}]);
