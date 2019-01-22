/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function(done) {

  //Crear nuestro primer usuario del sistema!, verificamos si existe con count
  //si no exite, lo creamos con create
  if (await Usuarios.count({curp:'SACJ940613HOCNRS03'}) === 0) {
    await Usuarios.create({
      nombre: 'Jesus Antonio',
      apellidoP: 'Santaella',
      apellidoM:'Cruz',
      curp: 'SACJ940613HOCNRS03',
      tipo:'admin',
      activo: true,
      password: await sails.helpers.passwords.hashPassword('12345678')
    });
  }
  if(await Incidencia.count({nombre:'Jesus'})==0){
    await Incidencia.create({
      nombre:'Jesus',
      apellidoP:'martinez',
      apellidoM:'cruz',
      correo:'aaa@gmail.com',
      telefono:'98765456789',
      tipo:'loco',
      descripcion:'ninuna',
      tecOrigen:'oAXACA',
      cargo:'ninguno',
      disciplina:'loco'
    });
  }
  /*
  if(await Deportistas.count({curp:'SACJ940613HOCNRS03'})==0){
    await Deportistas.create({
      curp:'SACJ940613HOCNRS03',
      nss:'121212312312',
      numeroControl:'12161404',
      foto:false,
      nombre: 'Jesus Antonio Santaella Cruz',
      alergias:'ninguna',
      numeroEmergencia:'9511620709',
      tecProcedencia:'IT Oaxaca',
      genero:'M',
      disciplina:'Natacion',
      tipodeSangre:'ORH+',
      activo:false
    })
  }
  if(await Tecnologicos.count({numero:'16'})==0){
    await Tecnologicos.create({
      numero:'16',
      nombre:'Instituto Tecnológico de Oaxaca',
      nombreCorto:'IT-Oaxaca'
    })
  }*/
  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return done();
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  return done();

};
