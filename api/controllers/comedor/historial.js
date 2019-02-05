/**
 * HistorialComedorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    friendlyName:'BUSQUEDA',
    description: 'BUSQUEDA DE Historial A COMEDOR',
    inputs:{
        tipo:
        {
            type:'string',
            required:true
        },
        fechaAcceso:
        {
            type:'string',
            required:true
        },
        disciplina:
        {
            type:'string',
            required:true
        }

    },
    exits:{

    },
    fn: async function (inputs,exits){
        var busqueda;
        switch(inputs.tipo)
        {
            case "TODAS":/*------------------------------------------------------------------------------------------------------------------------13*/
                switch(inputs.fechaAcceso)
                {
                    case "TODAS":/*----------------------------------------------------------------------------------------------------------------9*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*--------------------------------------------------------------------------------------------------------1*/
                            busqueda=await Historial.find().sort([{ tecProcedencia: 'ASC' },{ disciplina: 'ASC' },]);
                            break;
                            default:/*-------------------------------------------------------------------------------------------------------------2*/
                            busqueda=await Historial.find({disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                    
                    default:/*---------------------------------------------------------------------------------------------------------------------10*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------3*/
                            busqueda=await Historial.find({fechaAcceso:inputs.fechaAcceso}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------4*/
                            busqueda=await Historial.find({fechaAcceso:inputs.fechaAcceso,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                }
            break;
                
            default:/*------------------------------------------------------------------------------------------------------------------------------14*/
                switch(inputs.fechaAcceso)
                {
                    case "TODAS":/*-----------------------------------------------------------------------------------------------------------------11*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------5*/
                            busqueda=await Historial.find({tipo:inputs.tipo}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------6*/
                            busqueda=await Historial.find({tipo:inputs.tipo,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                    
                    default:/*---------------------------------------------------------------------------------------------------------------------12*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------11*/
                            busqueda=await Historial.find({tipo:inputs.tipo,fechaAcceso:inputs.fechaAcceso}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------12*/
                            busqueda=await Historial.find({tipo:inputs.tipo,fechaAcceso:inputs.fechaAcceso,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                }
            break;
    }
        return exits.success(busqueda);
    }
};