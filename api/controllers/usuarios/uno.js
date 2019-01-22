/**
 * UnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    inputs: {
        curp:{
          type:'string',
          required:true
        }
      },
      exits: {
    
      },
      fn: async function (inputs, exits) {
        return exits.success(await Usuarios.findOne({curp:inputs.curp}));
      }
    };