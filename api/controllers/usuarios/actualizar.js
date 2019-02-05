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
        aux=await Usuarios.update({curp:inputs.usuario.curp}).set({
          nombre:inputs.usuario.nombre,
          apellidoP:inputs.usuario.apellidoP,
          apellidoM:inputs.usuario.apellidoM,
          usuario:inputs.usuario.usuario,
          curp:inputs.usuario.curp,
          tipo:inputs.usuario.tipo,
          activo: true,
            password: await sails.helpers.passwords.hashPassword(inputs.usuario.password)
         });
     return exits.success(aux);
    }
  };