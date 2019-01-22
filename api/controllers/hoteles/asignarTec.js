/**
 * AsignarTecController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Guardar Hoteles.',
    inputs:{
        nombre:{
          type:'string',
          required:true
        },
        tecnologico:{
            type:'string',
            required:true
        },
        habitaciones:{
            type:'string',
            required:true
        }

    },
    exits:{
    },
    fn:async function(inputs,exits){
        await Tecnologico.update({tecnologico:inputs.tecnologico}).set({hotel:inputs.nombre,cantidadHabitaciones:inputs.habitaciones});
        sails.log('Resultado Deportista',hotel);
        return exits.success(hotel);
    }  

};

