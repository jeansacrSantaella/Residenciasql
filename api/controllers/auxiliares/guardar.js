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
        if(await Tecnologicos.count({nombre:inputs.auxiliar.tecOrigen})==0){
          await Tecnologicos.create({
              nombre:inputs.auxiliar.tecOrigen,
              nombreCorto:'IT'
          });
        }
        entrenador = await Auxiliares.create(inputs.auxiliar);
      }else{
        //existente
        entrenador = await Auxiliares.update({id:inputs.auxiliar.id},inputs.auxiliar);
      }
      sails.log('Resultado de guardar:', auxiliar);
      return exits.success(auxiliar);
    }
  };
  