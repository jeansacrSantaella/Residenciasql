ng.controller('loginController', ['$scope', function($scope) {

  $scope.$on('$viewContentLoaded', () => {
    console.log('loginController cargado.');
    $scope.curp = 'SACJ940613HOCNRS03';
    $scope.password = '12345678';
  });

}]);
