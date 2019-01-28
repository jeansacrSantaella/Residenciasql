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
  },
  exits: {
  },
  fn: async function (inputs,exits){
      var aux;
      if(!inputs.incidencia.id){
          aux=await Incidencia.create(inputs.incidencia);
      }else{
          aux=await Incidencia.update({id:inputs.incidencia.id},inputs.incidencia);
      }
      return exits.success(aux);
  }

};

