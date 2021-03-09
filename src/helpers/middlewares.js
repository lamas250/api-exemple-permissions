// Localizar modulo
function setComeFrom(req, res, next){
  const type = req.path;
  const spliteType = type.split('/');
  if( spliteType[1] === 'insurer' ){
    req.type = spliteType[1];

  }
  next();
}

module.exports = {
  setComeFrom
}