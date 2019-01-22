var moment = require('moment');
/**
 * Incidencia.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required:true
    },
    apellidoP:{
      type:'string',
      required:true
    },
    apellidoM:{
      type:'string',
      required:true
    },
    correo:{
      type:'string',
      required:true
    },
    telefono:{
      type:'string',
      required: true
    },
    tipo:{
      type:'string',
      required:true
    },
    descripcion:{
      type:'string',
      required:true
    },
    fechaReporte:{
      type:'string',
      required:false,
      columnType:'date'
    },
    tecOrigen:{
      type:'string',
      required:true
    },
    cargo:{
      type:'string',
      required:true
    },
    disciplina:{
      type:'string',
      required:true
    },
    estado:{
      type:'string',
      required:false,
      defaultsTo:'ESPERA'
    }
    
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
  beforeCreate: function(values,done){
    values.fechaReporte = moment().format();
    return done();
  }

};

