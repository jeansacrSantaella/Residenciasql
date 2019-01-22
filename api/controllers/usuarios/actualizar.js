/**
 * ActualizarController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  fliendlyName:'Guardar',
    description: 'Guardar usuarios.',
    inputs: {
      usuario:{
        type: 'json',
        required: true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      var aux;
     aux=await Usuarios.update({curp:inputs.usuario.curp},inputs.usuario);
     return exits.success(aux);
    }
  };