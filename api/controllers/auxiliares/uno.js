/**
 * UnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName: 'Uno',
    description: 'Un auxiliar.',
    inputs: {
      id:{
        type:'string',
        required:true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      return exits.success(await Auxiliares.findOne({id:inputs.id}));
    }

};

