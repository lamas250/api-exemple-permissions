const Permission = require('../app/models/Permission');
const Role = require("../app/models/Role");
const User = require("../app/models/User");

// Localizar modulo
function setComeFrom(req, res, next){
  const type = req.path;
  const spliteType = type.split('/');
  if( spliteType[1] === 'insurer' || spliteType[1] === 'company'){
    req.type = spliteType[1];
  }
  next();
}


function hasPermission(permission){
  
  // return async (req, res, next) => {
  //   console.log(req.body);
  //   console.log(permission);
  //   const { roleId } = req.body;
  //   if(roleId){
  //     const role_permissions = await Role.findByPk(roleId, {
  //       attributes: ['id','name','slug'],
  //       include: {
  //         model: Permission,
  //       },
  //     })
      
  //     console.log(role_permissions);
  //     res.permissions = role_permissions;
  //   }
  //   next();
  // }
 
}

module.exports = {
  setComeFrom,
  hasPermission
}