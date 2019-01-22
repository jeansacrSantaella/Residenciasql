//
// ─── BUSQUEDA TODOS LOS USUARIOS ────────────────────────────────────────────────
//

  
module.exports = {
  friendlyName: 'Todos',
  description: 'Todos usuarios.',
  inputs: {

  },
  exits: {

  },
  fn: async function (inputs, exits) {
    return exits.success(await Usuarios.find());
  }
};
