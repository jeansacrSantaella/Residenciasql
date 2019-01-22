//
// ─── BUSQUEDA ALUMNO ────────────────────────────────────────────────────────────
//

  
module.exports = {
  friendlyName: 'Uno',
  description: 'Uno alumnos.',
  inputs: {
    id:{
      type:'string',
      required:true
    }
  },
  exits: {

  },
  fn: async function (inputs, exits) {
    return exits.success(await Alumnos.findOne({id:inputs.id}));
  }
};
