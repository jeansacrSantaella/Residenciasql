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
            deportista=await Deportistas.create(inputs.deportista);
        }else{
        //existente
            deportista=await Deportistas.update({id:inputs.deportista.id},inputs.deportista);
        }
        sails.log('Resultado Deportista',deportista);
        return exits.success(deportista);
    }  


};