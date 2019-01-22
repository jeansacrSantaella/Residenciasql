/**
 * HotelController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    friendlyName:'Guardar',
    description: 'Guardar Hoteles.',
    inputs:{
        hotel:{
          type:'json',
          required:true
        },
        habitacion:{
            type:'json',
            required:true
        }
    },
    exits:{
    },
    fn:async function(inputs,exits){
        var hotel;
        //Nuevo deportista
        if(!inputs.hotel.id){
            hotel=await Hoteles.create(inputs.hotel,inputs.habitacion);
        }else{
        //existente
            hotel=await Hoteles.update({id:inputs.hotel.id},inputs.hotel);
        }
        sails.log('Resultado Deportista',hotel);
        return exits.success(hotel);
    }  
};

