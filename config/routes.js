/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  '/auth/login':{ action: 'auth/login'},
  '/usuarios/todos':{action: 'usuarios/todos'},//?get-all
  '/usuarios/listar':{action: 'usuarios/listar'},
  '/usuarios/ping':{action: 'usuarios/ping'},
  '/usuarios/guardar':{action: 'usuarios/guardar'},
  '/usuarios/uno':{action: 'usuarios/uno'},
  '/usuarios/actualizar':{action: 'usuarios/actualizar'},

  '/alumnos/guardar':{action: 'alumnos/guardar'},
  '/alumnos/todos':{action: 'alumnos/todos'},
  '/alumnos/uno':{action: 'alumnos/uno'},
  '/alumnos/borrar':{action: 'alumnos/borrar'},

  '/tecnologicos/guardar':{action: 'tecnologicos/guardar'},
  '/tecnologicos/todos':{action: 'tecnologicos/todos'},
  '/tecnologicos/uno':{action: 'tecnologicos/uno'},

  '/deportistas/subir-foto':{action: 'deportistas/subir-foto'},
  '/deportistas/todos-tec':{action: 'deportistas/todos-tec'},
  '/deportistas/guardar':{action: 'deportistas/guardar'},
  '/deportistas/activar':{action: 'deportistas/activar'},
  '/deportistas/todos':{action: 'deportistas/todos'},
  '/deportistas/uno':{action: 'deportistas/uno'},
  '/deportistas/guardarTecnologico':{action: 'deportistas/guardarTecnologico'},
  
  '/auxiliares/entrenadores-tec':{action: 'auxiliares/entrenadores-tec'},
  '/auxiliares/otros-tec':{action: 'auxiliares/otros-tec'},
  '/auxiliares/activar':{action: 'auxiliares/activar'},
  '/auxiliares/guardar':{action: 'auxiliares/guardar'},
  '/auxiliares/todos':{action: 'auxiliares/todos'},
  '/auxiliares/uno':{action: 'auxiliares/uno'},


  '/hoteles/asignarTec':{action:'hoteles/asignarTec'},
  '/hoteles/guardar':{action:'hoteles/guardar'},
  '/hoteles/todos':{action:'hoteles/todos'},
  '/hoteles/uno':{action:'hoteles/uno'},
  

  '/staff/guardar':{action:'staff/guardar'},
  '/staff/todos':{action:'staff/todos'},
  '/staff/uno':{action:'staff/uno'},
  
  '/incidencias/guardar':{action:'incidencias/guardar'},
  '/incidencias/revisado':{action:'incidencias/revisado'},
  '/incidencias/todos':{action:'incidencias/todos'},
  '/incidencias/uno':{action:'incidencias/uno'},

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝


};
