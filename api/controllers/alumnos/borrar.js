//
// ─── ALUMNOS BORRAR ─────────────────────────────────────────────────────────────
//

  
module.exports = {
  friendlyName: 'Borrar',
  description: 'Borrar alumnos.',
  inputs: {
    id:{
      type:'string'
    }
  },
  exits: {

  },
  fn: async function (inputs, exits) {
    console.log('intentando borrar alumno', inputs);
    var borrado = await Alumnos.update({id:inputs.id},{activo:false});
    return exits.success(borrado);
  }
};
