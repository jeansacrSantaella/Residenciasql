
module.exports = function(req, res, next) {
  if (!req.headers||!req.headers.perfil) {
    sails.log('No tenemos perfil:', req.headers);
    return res.status(403).send({err: 'Debe traer perfil en headers'});
  }

  if(req.headers.perfil === 'admin'){
    return next();
  }else{
    return res.status(403).send({err: 'Perfil no válido para esta acción'});
  }

};
