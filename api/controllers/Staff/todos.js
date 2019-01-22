//
// ─── STAFF TODOS ────────────────────────────────────────────────────────────────
//

    
module.exports = {
    friendlyName: 'Todos',
    description: 'Todos los miebros de staff del tecnologico sede.',
    inputs: {
  
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      return exits.success(await Staff.find());
    }

};

