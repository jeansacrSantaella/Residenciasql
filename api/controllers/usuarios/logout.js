//
// ─── USUARIOS SALIR LOGOUT ──────────────────────────────────────────────────────
//

  
module.exports = {
  friendlyName: 'Logout',
  description: 'Logout usuarios.',
  inputs: {

  },
  exits: {

  },
  fn: async function (inputs, exits) {
    this.req.session.usuario = {};
    return exits.success();
  }
};
