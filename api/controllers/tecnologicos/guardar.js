 //
 // ─── TECNOLOGICO ────────────────────────────────────────────────────────────────
 //

     
module.exports = {
  friendlyName:'Guardar',
  description: 'Guardar tecnologicos.',
  inputs:{
      tecnologico:{
        type:'json',
        required:true
      }
  },
  exits:{
  },
  fn:async function(inputs,exits){
      var tecnologico;
      //Nuevo tecnológico
      if(!inputs.tecnologico.id){
          tecnologico=await Tecnologicos.create(inputs.tecnologico);
      }else{
      //existente
          tecnologico= await Tecnologicos.update({id:inputs.tecnologico.id},inputs.tecnologico);
      }
      sails.log('Resultado de guardar Tecnologico',tecnologico);
      return exits.success(tecnologico);
  }
};

