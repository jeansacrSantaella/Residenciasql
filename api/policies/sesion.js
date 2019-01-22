
module.exports = function(req, res, next) {
  if (!req.session||!req.session.usuario) {
    sails.log('No tenemos sesión de usuario!');
    return res.status(401).send({err: 'Debe iniciar Sesión'});
  }
  return next();
};
