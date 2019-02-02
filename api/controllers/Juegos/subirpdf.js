module.exports = {
    friendlyName: 'subir PDF',
    description: 'Sube un archivo formato PDF al servidor.',
    inputs: {
      nombre:{
        type:'string',
        required:true
      }
    },
    exits: {
      success:{
        description: 'El archivo fue recibido correctamente.'
      }
    },

    fn: async function (inputs, exits) {
      sail.log("Paso a guardar",inputs);
      this.req.file('file').upload({
        dirname:'../../assets/images/DeportistasFotos/',
        saveAs: function(fst, next){
          sails.log('Intento de subida de archivo:',fst);
          var ext = '.pdf';
          if(fst.headers['content-type']==='application/pdf') {ext='.pdf';}
          var rutaFinal = inputs.nombre+'.pdf';
          if(['.png','.jpg','.pdf'].indexOf(ext)>-1) {
            return next(null, rutaFinal);
          }
          else {
            return next('Archivo no válido, solo se permiten archivos PDF.');
          }
        }
      },(err, uploadedFiles) => {
        if (err) {
          console.log('Error!', err);
          return exits.error(err);
        }
        if(uploadedFiles.length){
          sails.log('Archivos subidos!:', uploadedFiles);
          return exits.success({result:true, log:uploadedFiles});
        }else{
          return exits.success({result:false});
        }


      });
    }
  };
  
