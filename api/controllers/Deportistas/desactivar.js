/**
 * DesactivarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Desactivar deportista.',
    inputs:{
        curp:{
          type:'string',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        await Deportistas.update({curp:inputs.curp}).set({activo:false});
        //sails.log('Resultado Deportista',deportista);
        return exits.success('DESACTIVADO');
    }  


};
