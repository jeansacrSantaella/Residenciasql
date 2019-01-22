ng.factory('UsuarioFactory', ['$http', '$location', '$timeout',function($http, $location, $timeout){
  return {
    usuario: {},
    login: function(curp, password){
      var self = this;
      $http.post('/auth/login',{curp:curp, password:password}).then(
        function success(response){
          console.log('POST /auth/login->response', response);

          if(response.data.result && response.data.usuario){
            //Tenemos sesion!
            self.usuario = response.data.usuario;
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario)); //almacenarlo en duro en el navegador.
            $location.path('/welcome').replace();
          }
        },
        function error(error){
          if(error.status === 401){
            var mensaje='Usuario y/o contraseña no válidos.';
            if(error.data.mensaje) {mensaje = error.data.mensaje;}
            alertify.error(mensaje);
          }
          console.log('POST /auth/login->error', error);
        }
      );
    },
    logout: function(post){
      var self = this;

      alertify.confirm('Cerrar Sesión', '¿Está Seguro?', () => {
        $timeout(() => {
          self.usuario = {};
          localStorage.removeItem('usuario');
          if(post){
            $http.get('/usuarios/logout').then(
              function success(response){
                console.log('Retorno de logout:', response);
              },
              function error(err){
                console.log('Error al hacer logout:', err);
              }
            );
          }
          $location.path('/login').replace();
          alertify.message('Su sesión ha sido finalizada.');
        });
      }, () => {
      });
    },
    init: function(){
      var self = this;
      var usr = localStorage.getItem('usuario');
      if(usr) {usr = JSON.parse(usr);}
      if(usr && usr.id){//solo cuando existe...
        //lo pre-cargamos...
        self.usuario = usr;

        //validamos su sesion con un get...
        $http.get('/usuarios/ping').then(
          function success(response){
            console.log('GET /usuarios/ping->response',response);
            if(!response.data.id){ //no tiene sesion real en el back o ya expiró!!!
              //lo tumbamos
              self.logout(false);
            }
          },
          function error(error){
            console.log('GET /usuarios/ping->error',error);
          }
        );
      }
    }
  };
}]);
