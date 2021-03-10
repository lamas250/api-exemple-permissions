const User = require('../models/User');
const bcrypt = require('bcrypt');
const { index } = require('./InsurerController');

module.exports = {
  async index(req, res){
    const users = await User.findAll({
      include: {
        association: 'role'
      }
    });

    res.json(users);
  },

  async store(req, res) {
    const { name, email, password, status_id, role_id } = req.body;
    const { type } = req;
    const { id } = req.params;
    const validTypes = ['insurer', 'company'];

    if(!type) return res.json({message: 'Cadastro não permitido.'});
  
    try {
      const user = await User.create({
        come_from_type: type,
        come_from_id: id,
        name,
        email,
        password: bcrypt.hashSync(password, 8),
        status_id,
        role_id
      })
      return res.json(user);
    } catch (error) {
      return res.json({message: error.message});
    }
  }
};