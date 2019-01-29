/**
 * ResultadosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName: 'ResultadosTodos',
    description: 'Resultados por disciplina',
    inputs: {
      disciplina:{
        type:'string',
        required:true
      },
      genero:{
        type:'string',
        required:true
      },
      jornada:{
        type:'string',
        required:true
      }
    },
    exits: {
    },
    fn: async function (inputs, exits) {
      return exits.success(await Games.find({disciplina:inputs.disciplina,genero:inputs.genero,jornada:inputs.jornada}));
    }
};

