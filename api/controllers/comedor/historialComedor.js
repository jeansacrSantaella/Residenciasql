/**
 * HistorialComedorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
    friendlyName:'BUSQUEDA',
    description: 'BUSQUEDA DE HistorialComedor A COMEDOR',
    inputs:{
        horaAcceso:
        {
            type:'string',
            required:true
        },
        dia:
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
        switch(inputs.horaAcceso)
        {
            case "TODAS":/*------------------------------------------------------------------------------------------------------------------------13*/
                switch(inputs.dia)
                {
                    case "TODAS":/*----------------------------------------------------------------------------------------------------------------9*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*--------------------------------------------------------------------------------------------------------1*/
                            busqueda=await HistorialComedor.find({activo:true}).sort([{ tecProcedencia: 'ASC' },{ disciplina: 'ASC' },]);
                            break;
                            default:/*-------------------------------------------------------------------------------------------------------------2*/
                            busqueda=await HistorialComedor.find({activo:true,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                    
                    default:/*---------------------------------------------------------------------------------------------------------------------10*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------3*/
                            busqueda=await HistorialComedor.find({activo:true,dia:inputs.dia}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------4*/
                            busqueda=await HistorialComedor.find({activo:true,dia:inputs.dia,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                }
            break;
                
            default:/*------------------------------------------------------------------------------------------------------------------------------14*/
                switch(inputs.dia)
                {
                    case "TODAS":/*-----------------------------------------------------------------------------------------------------------------11*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------5*/
                            busqueda=await HistorialComedor.find({activo:true,horaAcceso:inputs.horaAcceso}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------6*/
                            busqueda=await HistorialComedor.find({activo:true,horaAcceso:inputs.horaAcceso,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                    
                    default:/*---------------------------------------------------------------------------------------------------------------------12*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------11*/
                            busqueda=await HistorialComedor.find({activo:true,horaAcceso:inputs.horaAcceso,dia:inputs.dia}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------12*/
                            busqueda=await HistorialComedor.find({activo:true,horaAcceso:inputs.horaAcceso,dia:inputs.dia,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                }
            break;
        }
        return exits.success(busqueda);
    }
};