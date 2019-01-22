//
// ─── LOGIN ──────────────────────────────────────────────────────────────────────
//

  
module.exports = {
  friendlyName: 'Login',
  description: 'Login usuarios.',
  inputs: {
    curp:{
      type:'string',
      required: true
    },
    password:{
      type:'string',
      required: true
    }
  },
  exits: {
    unauthorized: {
      description: 'Usuario y contraseña no válidos',
      extendedDescription:'El usuario y contraseña tecleados no son correctos.',
      statusCode: 401
    }
  },
  fn: async function (inputs, exits) {
    sails.log('Intento de inicio de sesión', inputs);

    var usr = await Usuarios.findOne({curp:inputs.curp});

    if(!usr){
      return exits.unauthorized();
    }

    await sails.helpers.passwords.checkPassword(inputs.password, usr.password).intercept('incorrect', 'unauthorized');

    if(!usr.activo){
      return exits.unauthorized({result:false, mensaje:'El usuario no está activo.'});
    }

    delete usr.password;

    this.req.session.usuario = usr;
    return exits.success({result:true, usuario: usr});
  }
};
