const Role = require('../models/Role');
const { index } = require('./InsurerController');

module.exports = {
  async index(req, res){
    const roles = await Role.findAll();
    return res.json(roles);
  },

  async store(req, res) {
    const {name, description} = req.body;
    const slug = name.toLowerCase();
    const role = await Role.create({name, slug, description});
  
    return res.json(role);
  }
};