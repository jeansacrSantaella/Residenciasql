/**
 * UnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    friendlyName: 'Uno',
    description: 'Horario por dia.',
    inputs: {
      dia:{
        type:'string',
        required:true
      },
      disciplina:{
        type:'string',
        required:true
      }
    },
    exits: {
  
    },
    fn: async function (inputs, exits) {
      var busqueda;
      if(inputs.disciplina!='TODOS')
      {
        busqueda=await Games.find({jornada:inputs.dia,disciplina:inputs.disciplina}).sort('hora ASC');
      }else{
        busqueda=await Games.find({jornada:inputs.dia}).sort('hora ASC');
      }
      return exits.success(busqueda);
    }

};

