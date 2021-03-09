const Role = require('../models/Role');

module.exports = {
  async store(req, res) {
    const {name, description} = req.body;
    const slug = name.toLowerCase();
    const role = await Role.create({name, slug, description});
  
    return res.json(role);
  }
};