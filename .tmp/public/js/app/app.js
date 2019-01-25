/*eslint-disable no-unused-vars*/
var ng = angular.module('miApp', ['ngRoute','ngFileUpload']);

ng.run(['$rootScope', '$location', '$http', 'UsuarioFactory', function($rootScope, $location, $http, UsuarioFactory){
  console.log('Etapa RUN!');

  $rootScope.main = {
    app: {
      version: '0.0.1'
    },
    ping:false,
    UsuarioFactory: UsuarioFactory,
    rutaActual:''
  };

  $rootScope.main.UsuarioFactory.init();

}]);
