//
// ─── INCIDENCIAS GUARDAR ────────────────────────────────────────────────────────
//
module.exports = {
  friendlyName:'Guardar',
  description: 'Guardar los reportes de incidencias generadas.',
  inputs:{
      incidencia:{
          type:'json',
          required: true
      }
  },exits: {

  },
  fn: async function (inputs,exits){
      var aux;
      if(!inputs.incidencia.id){
        sails.log('creando nuevo');
          aux=await Incidencia.create(inputs.incidencia);
      }else{
        sails.log('que paso?');
          aux=await Incidencia.update({id:inputs.incidencia.id},inputs.incidencia);
      }
      sails.log('Resultado de guardar:',aux);
      return exits.success(aux);
  }

};

