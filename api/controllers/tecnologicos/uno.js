/**
 * UnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName: 'Uno',
    description: 'Un tecnoógico seleccionado.',
    inputs: {
      numero:{
        type:'string',
        required:true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      return exits.success(await Tecnologico.findOne());
    }

};

