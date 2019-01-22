//
// ─── ACTIVAR ────────────────────────────────────────────────────────────────────
//

    

module.exports = {
    friendlyName:'Guardar',
    description: 'Activar deportista.',
    inputs:{
        curp:{
          type:'string',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        await Deportistas.update({curp:inputs.curp}).set({activo:true});
        //sails.log('Resultado Deportista',deportista);
        return exits.success('Activado');
    }  
 
    
};

