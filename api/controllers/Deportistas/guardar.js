//
// ─── DEPORTISTA ─────────────────────────────────────────────────────────────────
//

    
module.exports = {
    friendlyName:'Guardar',
    description: 'Guardar deportistas.',
    inputs:{
        deportista:{
          type:'json',
          required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        var deportista;
        //Nuevo deportista
        if(!inputs.deportista.id){
            if(await Tecnologicos.count({nombre:inputs.deportista.tecProcedencia})==0){
                await Tecnologicos.create({
                    nombre:inputs.deportista.tecProcedencia,
                    nombreCorto:'IT'
                });
            }
            if(await Deportistas.count({curp:inputs.deportista.curp})==0){
                deportista=await Deportistas.create(inputs.deportista);
            }else{
                deportista="undefined";
            }
                
        }else{
        //existente
            deportista=await Deportistas.update({id:inputs.deportista.id},inputs.deportista);
        }
        sails.log('Resultado Deportista',deportista);
        return exits.success(deportista);
    }  

};

