

module.exports = {
    friendlyName:'Todos',
    description: 'Todos los deportistas por tec.',
    inputs:{
        tecProcedencia:{
            type:'string',
            required:true
          }
    },
    exits:{

    },
    fn: async function (inputs,exits){
        return exits.success(await Deportistas.find({tecProcedencia:inputs.tecProcedencia,activo:false}));
        //return exits.success(await Deportistas.find({activo:false}));
    }

};

