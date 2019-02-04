module.exports = {
    friendlyName:'BUSQUEDA',
    description: 'BUSQUEDA DE INVITADOS A COMEDOR',
    inputs:{
        tipo:
        {
            type:'string',
            required:true
        },
        genero:
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
            case "TODOS":/*------------------------------------------------------------------------------------------------------------------------13*/
                switch(inputs.genero)
                {
                    case "AMBAS":/*----------------------------------------------------------------------------------------------------------------9*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*--------------------------------------------------------------------------------------------------------1*/
                            busqueda=await Invitados.find().sort('tecProcedencia ASC');
                            break;
                            default:/*-------------------------------------------------------------------------------------------------------------2*/
                            busqueda=await Invitados.find({disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                    
                    default:/*---------------------------------------------------------------------------------------------------------------------10*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------3*/
                            busqueda=await Invitados.find({genero:inputs.genero}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------4*/
                            busqueda=await Invitados.find({genero:inputs.genero,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                }
            break;
                
            default:/*------------------------------------------------------------------------------------------------------------------------------14*/
                switch(inputs.genero)
                {
                    case "AMBAS":/*-----------------------------------------------------------------------------------------------------------------11*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------5*/
                            busqueda=await Invitados.find({tipo:inputs.tipo}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------6*/
                            busqueda=await Invitados.find({tipo:inputs.tipo,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                    
                    default:/*---------------------------------------------------------------------------------------------------------------------12*/
                        switch(inputs.disciplina)
                        {
                            case "TODAS":/*---------------------------------------------------------------------------------------------------------11*/
                            busqueda=await Invitados.find({tipo:inputs.tipo,genero:inputs.genero}).sort('tecProcedencia ASC');
                            break;
                            default:/*--------------------------------------------------------------------------------------------------------------12*/
                            busqueda=await Invitados.find({tipo:inputs.tipo,genero:inputs.genero,disciplina:inputs.disciplina}).sort('tecProcedencia ASC');
                            break;
                        }
                    break;
                }
            break;
        }
        return exits.success(busqueda);
    }
};