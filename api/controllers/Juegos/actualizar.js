/**
 * ActualizarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Guardar Modificación de resultado',
    inputs:{
        id:{
            type:'string',
            required: true
        },
    },
    exits: {
    },
    fn: async function (inputs,exits){
        var aux;
        aux=await Games.update({id:inputs.id}).set({actualizar:false});
        return exits.success(aux);
    }
  
  };