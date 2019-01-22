/**
 * OtrostecController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Todos',
    description: 'Todos los entrenador por tec.',
    inputs:{
        tecProcedencia:{
            type:'string',
            required:true
          }
    },
    exits:{

    },
    fn: async function (inputs,exits){
        return exits.success(await Auxiliares.find({tecOrigen:inputs.tecProcedencia,activo:false,tipo:['Médico','Chofer','Promotor']}));
    }

};

