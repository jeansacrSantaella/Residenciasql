/**
 * Deportista.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {

  attributes: {
    numeroControl:{
      type:'string',
      required:true
    },
    foto:{
      type:'boolean',
      defaultsTo:false
    },
    nombre:{
      type:'string',
      required:true
    },
    curp:{
      type:'string',
      required:true
    },
    padecimientos:{
      type:'string',
      required:false
    },
    alergias:{
      type:'string',
      required:false
    },
   tipodeSangre:{
    type:'string',
    required:true
   },
    nss:{
      type:'string',
      required:true
   },
    numeroEmergencia:{
      type:'string',
      required:false
    },
    tecProcedencia:{
      type:'string',
      required:true
    },
    disciplina:{
      type:'string',
      required:true
    },
    activo:{
      type:'boolean',
      required:false,
    },



    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

