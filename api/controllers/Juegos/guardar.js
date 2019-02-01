/**
 * GuardarController
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
        resultado1:{
            type:'string',
            required:true
        },
        resultado2:{
            type:'string',
            required:true
        }
    },
    exits: {
    },
    fn: async function (inputs,exits){
        var aux;
        aux=await Games.update({id:inputs.id}).set({resultado1:inputs.resultado1,resultado2:inputs.resultado2,actualizar:true});
        return exits.success(aux);
    }
  
  };