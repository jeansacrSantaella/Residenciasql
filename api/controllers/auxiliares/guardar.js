/**
 * GuardarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

  
module.exports = {
    friendlyName: 'Guardar',
    description: 'Guardar auxiliares.',
    inputs: {
      auxiliar:{
        type: 'json',
        required: true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      var auxiliar;
      //nuevo
      if(!inputs.auxiliar.id){
        if(await Auxiliares.count({nombre:inputs.auxiliar.nombre})===0)
        auxiliar = await Auxiliares.create(inputs.auxiliar);
        else
        auxiliar="undefined";
      }else{
        auxiliar = await Auxiliares.update({id:inputs.auxiliar.id},inputs.auxiliar);
      }
      return exits.success(auxiliar);
    }
  };
  