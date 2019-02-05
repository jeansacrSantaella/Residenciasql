/**
 * DesacctivarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Desactivar deportista e invitado.',
    inputs:{
        id:{
          type:'string',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        await Invitados.update({id:inputs.id}).set({activo:false});
        return exits.success('DESACTIVADO');
    }  
};
