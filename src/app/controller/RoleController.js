const Permission = require('../models/Permission');
const Role = require('../models/Role');
const { index } = require('./InsurerController');

module.exports = {
  async index(req, res){
    console.log(req.user);
    const roles = await Role.findAll({
      attributes: ['id','name','slug'],
      include: {
        model: Permission,
        attributes: ['name'],
        through: {
          attributes: []
        } 
      },
    });
    return res.json(roles);
  },

  async store(req, res) {
    const {name, description} = req.body;
    const slug = name.toLowerCase();
    const role = await Role.create({name, slug, description});
  
    return res.json(role);
  },

  async showAllPermisison(req, res){
    const permissions = await Permission.findAll();

    return res.json(permissions);
  }
};