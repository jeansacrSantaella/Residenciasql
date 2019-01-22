//
// ─── USUARIOS PING DE SESION ────────────────────────────────────────────────────
//

  
module.exports = {
  friendlyName: 'Ping',
  description: 'Ping usuarios.',
  inputs: {

  },
  exits: {

  },
  fn: async function (inputs, exits) {
    //obtenemos el usuario de la SESION, buscamos su id y regresamos el objeto.
    var usr = await Usuarios.findOne({id:this.req.session.usuario.id});
    if(!usr){
      return exits.success();
    }

    if(!usr.activo){
      return exits.success();
    }
    delete usr.password;
    return exits.success(usr);
  }
};
