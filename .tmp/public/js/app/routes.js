ng.run(['$rootScope', '$location',function($rootScope, $location) {

  $rootScope.$on('$routeChangeStart', (event, next, current) => {
    console.log('INTENTO DE CAMBIO DE RUTA, Actual:', current, 'Siguiente:',next);

    //si es a una pagina abierta... continuar
    if (next && next.$$route && (
      next.$$route.originalPath === '/disciplinas' || next.$$route.originalPath === '/evento' || next.$$route.originalPath === '/mapas' || next.$$route.originalPath === '/calendario' || next.$$route.originalPath === '/login' || next.$$route.originalPath === '/acercade' || next.$$route.originalPath === '/welcome'|| 
      next.$$route.originalPath === '/VOLEIBOL_PLAYA/:disciplina' || next.$$route.originalPath ==='/VOLEIBOL/:disciplina' ||  next.$$route.originalPath ==='/FUTBOL/:disciplina' || next.$$route.originalPath ==='/BEISBOL/:disciplina' || next.$$route.originalPath ==='/BASQUETBOL/:disciplina' || next.$$route.originalPath ==='/TENIS/:disciplina' || next.$$route.originalPath ==='/SOFTBOL/:disciplina' || next.$$route.originalPath ==='/AJEDREZ/:disciplina' 
      ||next.$$route.originalPath === 'Resultados' ||next.$$route.originalPath ==='Resultados/partidos')){
      return true;
    }

    //verificar que tenga sesion
    if(!$rootScope.main.UsuarioFactory.usuario.id){ //no deberia entrar a menos que sea a login
      console.log('Acceso denegado, redireccionando a login');
      event.preventDefault();
      $location.path('/welcome').replace();
      return false;
    }
  });

  $rootScope.$on('$routeChangeSuccess', (event, current) => {
    console.log('CAMBIO DE RUTA', current);
    if(current && current.$$route && current.$$route.originalPath) {
      $rootScope.main.rutaActual = current.$$route.originalPath;
    }
    //console.log("ruta actual:", $rootScope.main.rutaActual);
  });
}]);


ng.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('Etapa Config (ROUTES)');

  $locationProvider.hashPrefix(''); //quitar el ! de las rutas
  $routeProvider
    .when('/login', { //configuracion de rutas
      templateUrl: 'templates/VistasPrincipales/loginController.html', //ruta del archivo
      controller: 'loginController', //nombre del controller
    })
    .when('/dashboard', {
      templateUrl: 'templates/VistasPrincipales/dashboardController.html', //ruta del archivo
      controller: 'dashboardController', //nombre del controller
    })
    .when('/acercade', {
      templateUrl: 'templates/VistasPrincipales/acercadeController.html', //ruta del archivo
      controller: 'acercadeController', //nombre del controller
    })
    .when('/alumnos', {
      templateUrl: 'templates/alumnosController.html', //ruta del archivo
      controller: 'alumnosController', //nombre del controller
    })
    .when('/alumno/:id', {
      templateUrl: 'templates/alumnoController.html', //ruta del archivo
      controller: 'alumnoController', //nombre del controller
    })
    .when('/welcome', {
      templateUrl: 'templates/welcomeController.html', //ruta del archivo
      controller: 'welcomeController', //nombre del controller
    })
    .when('/mapas', {
      templateUrl: 'templates/VistasPrincipales/mapasController.html', //ruta del archivo
      controller: 'mapasController', //nombre del controller
    })
    .when('/calendario', {
      templateUrl: 'templates/VistasPrincipales/calendarioController.html', //ruta del archivo
      controller: 'calendarioController', //nombre del controller
    })
    .when('/disciplina', {
      templateUrl: 'templates/disciplinaController.html', //ruta del archivo
      controller: 'disciplinaController', //nombre del controller
    })
    .when('/evento', {
      templateUrl: 'templates/VistasPrincipales/eventoController.html', //ruta del archivo
      controller: 'eventoController', //nombre del controller
    })
    .when('/disciplinas', {
      templateUrl: 'templates/disciplinasController.html', //ruta del archivo
      controller: 'disciplinasController', //nombre del controller
    })
    .when('/tecnologicos', {
      templateUrl: 'templates/Tecnologicos/tecnologicosController.html', //ruta del archivo
      controller: 'tecnologicosController', //nombre del controller
    })
    .when('/tecnologicos/:tecProcedencia', {
      templateUrl: 'templates/Tecnologicos/listadoParticipantes.html', //ruta del archivo
      controller: 'listadoParticipantes', //nombre del controller
    })
    .when('/deportista/:curp', {
      templateUrl: 'templates/Deportistas/deportistaController.html', //ruta del archivo
      controller: 'deportistaController', //nombre del controller
    })
    .when('/deportistas', {
      templateUrl: 'templates/Deportistas/deportistasController.html', //ruta del archivo
      controller: 'deportistasController', //nombre del controller
    })
    .when('/staff/:numeroControl', {
      templateUrl: 'templates/Staff/staffController.html', //ruta del archivo
      controller: 'staffController', //nombre del controller
    })
    .when('/staffs', {
      templateUrl: 'templates/Staff/staffsController.html', //ruta del archivo
      controller: 'staffsController', //nombre del controller
    })
    .when('/auxiliares', {
      templateUrl:'templates/Auxiliares/auxiliares.html',
      controller:'auxiliaresController',
    })
    .when('/auxiliar/:id', {
      templateUrl:'templates/Auxiliares/auxiliar.html',
      controller:'auxiliarController',
    })
    .when('/nuevoDeportista/:nombreTec', {
      templateUrl:'templates/Tecnologicos/creaDeportista.html',
      controller:'nuevoDeportista',
    })
    .when('/hotel/:id', {
      templateUrl:'templates/Hoteles/registroHotel.html',
      controller:'registrarHotelController',
    })
    .when('/hoteles', {
      templateUrl:'templates/Hoteles/asignacionHotel.html',
      controller:'todosHotelesController',
    })
    .when('/hoteles/resultado', {
      templateUrl:'templates/Hoteles/hotelResultado.html',
      controller:'',
    })
    .when('/usuarios/:curp', {
      templateUrl:'templates/Usuarios/usuariosController.html',
      controller:'usuariosController',
    })
    .when('/usuarios', {
      templateUrl:'templates/Usuarios/listarUsuarios.html',
      controller:'todosUsuarios',
    })
    .when('/incidencias', {
      templateUrl:'templates/Incidencias/listadoIncidencias.html',
      controller:'incidenciasController',
    })
    .when('/incidencia/:id', {
      templateUrl:'templates/Incidencias/incidencia.html',
      controller:'incidenciaController',
    })
    .when('/FUTBOL/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/BASQUETBOL/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/VOLEIBOL/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/VOLEIBOLPLAYA/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/BEISBOL/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/SOFTBOL/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/TENIS/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/AJEDREZ/:disciplina', {
      templateUrl:'templates/Deportes/Individuales.html',
      controller:'futController',
    })
    .when('/Comedor', {
      templateUrl:'templates/Comedor/listadoComedor.html',
      controller:'todosComedor',
    })
    .otherwise({
      redirectTo: '/welcome'
    });

}]);
