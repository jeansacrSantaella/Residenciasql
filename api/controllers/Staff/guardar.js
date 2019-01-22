//
// ─── STAFF ──────────────────────────────────────────────────────────────────────
//

    
module.exports = {
    friendlyName: 'Guardar',
    description: 'Guardar staff.',
    inputs: {
      staff:{
        type: 'json',
        required: true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      var staff;
      //nuevo
      if(!inputs.staff.id){
        staff = await Staff.create(inputs.staff);
      }else{
        //existente
        staff = await Staff.update({id:inputs.staff.id},inputs.staff);
      }
      sails.log('Resultado de guardar:', staff);
      return exits.success(staff);
    }

};

