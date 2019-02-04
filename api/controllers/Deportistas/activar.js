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
        var deportista;

        await Deportistas.update({curp:inputs.curp}).set({activo:true});
        deportista=await Deportistas.findOne({curp:inputs.curp});

        if(await Invitados.count({clave:inputs.curp})==0){
            await Invitados.create(
                { 
                    clave:deportista.curp,
                    nombre:deportista.nombre,
                    genero:deportista.genero,
                    tecProcedencia:deportista.tecProcedencia,
                    disciplina:deportista.disciplina,
                    activoComedor:false,
                    activo:true,
                    tipo:'DEPORTISTA'
                });
        }
        return exits.success('Activado');
    }  
 
    
};

