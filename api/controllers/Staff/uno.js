/**
 * UnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName: 'Uno',
    description: 'Un miebro de Staff.',
    inputs: {
      numeroControl:{
        type:'string',
        required:true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      return exits.success(await Staff.findOne({numeroControl:inputs.numeroControl}));
    }

};

