//
// ─── ALUMNOS TODOS ──────────────────────────────────────────────────────────────
//

  
module.exports = {
  friendlyName: 'Todos',
  description: 'Todos alumnos.',
  inputs: {

  },
  exits: {

  },
  fn: async function (inputs, exits) {
    return exits.success(await Alumnos.find({activo:true}).populate('usuario'));
  }
};
