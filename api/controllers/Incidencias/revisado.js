 //
 // ─── INCIDENCIA REVISADA ───────────────────────────────────────────────────────────
 //

     

module.exports = {
friendlyName: 'Revision',
decription: 'Definir cambio de estado de una incidencia' , 
inputs:{
    id:{
        type:'string',
        required:true
    }
},
exits:{

},
fn:async function (inputs,exits) {
    var incidencia;
    incidencia=await Incidencia.update({id:inputs.id}).set({estado:'REVISADO'});
    return exits.success(incidencia);
}
};

