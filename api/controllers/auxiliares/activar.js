/**
 * ActivarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Activar auxiliar.',
    inputs:{
        id:{
          type:'string',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        await Auxiliares.update({id:inputs.id}).set({activo:true});
        //sails.log('Resultado Deportista',deportista);
        return exits.success('Activado');
    }  
 

};

