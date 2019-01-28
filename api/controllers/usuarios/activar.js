/**
 * ActivarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Desactivar Usuarios.',
    inputs:{
        curp:{
          type:'string',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        await Usuarios.update({curp:inputs.curp}).set({activo:true});
        //sails.log('Resultado Deportista',deportista);
        return exits.success('ACTIVADO');
    }  

};

