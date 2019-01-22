//
// ─── BUSQUEDA DEPORTISTA ────────────────────────────────────────────────────────────
//

  
module.exports = {
    friendlyName: 'Uno',
    description: 'Uno Deportista.',
    inputs: {
      curp:{
        type:'string',
        required:true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      return exits.success(await Deportistas.findOne({curp:inputs.curp}));
    }
  };
  