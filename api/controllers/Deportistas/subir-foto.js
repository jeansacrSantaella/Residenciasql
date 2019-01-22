module.exports = {
    friendlyName: 'subir foto',
    description: 'Sube una foto del deportista invitado y la almacena.',
    inputs: {
      deportistacurp:{
        type: 'string',
        required: true
      }
    },
    exits: {
      success:{
        description: 'El archivo fue recibido correctamente.'
      }
    },
  
    fn: async function (inputs, exits) {
      sails.log('intento de subir foto', inputs);
      this.req.file('file').upload({
        dirname:'../../assets/images/DeportistasFotos/',
        saveAs: function(fst, next){
          sails.log('Intento de subida de archivo:',fst);
          var ext = '.jpg';
          if(fst.headers['content-type']==='image/jpg') {ext='.jpg';}
          var rutaFinal = inputs.deportistacurp+'.jpg';
          if(['.png','.jpg','.pdf'].indexOf(ext)>-1) {
            return next(null, rutaFinal);
          }
          else {
            return next('Archivo no válido, solo se permiten archivos JPG.');
          }
        }
      },(err, uploadedFiles) => {
        if (err) {
          console.log('Error!', err);
          return exits.error(err);
        }
  
        if(uploadedFiles.length){
          sails.log('Archivos subidos!:', uploadedFiles);
          Deportistas.update({curp:inputs.deportistacurp},{foto: true}).exec((error) => {
            if(!error) {return exits.success({result:true, log:uploadedFiles});}
            return exits.error(error);
          });
        }else{
          return exits.success({result:false});
        }
  
      });
    }
  };
  