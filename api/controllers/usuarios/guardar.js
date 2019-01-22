//
// ─── CREAR UN NUEVO USUARIO ─────────────────────────────────────────────────────
//

module.exports = {
    fliendlyName:'Guardar',
    description: 'Guardar usuario',
    inputs:{
        usuario:{
            type:'json',
            required:true
        }
    },
    exits:{

    },
    fn:async function(inputs,exits){
        var aux;
        if ( await Usuarios.count({curp:inputs.usuario.curp}) === 0) {
             aux=await Usuarios.create({
              nombre:inputs.usuario.nombre,
              apellidoP:inputs.usuario.apellidoP,
              apellidoM:inputs.usuario.apellidoM,
              usuario:inputs.usuario.usuario,
              curp:inputs.usuario.curp,
              tipo:inputs.usuario.tipo,
              activo: true,
              password: await sails.helpers.passwords.hashPassword(inputs.usuario.password)
            });
    }
    return exits.success(aux);
}
};

