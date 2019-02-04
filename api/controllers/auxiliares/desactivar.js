/**
 * ActivarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'DESACTIVAR auxiliar.',
    inputs:{
        id:{
          type:'string',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        await Auxiliares.update({id:inputs.id}).set({activo:false});
        return exits.success('DESACTIVADO');
    }  
 

};

