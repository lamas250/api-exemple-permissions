const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async store(req, res) {
    const { name, email, password, status_id, role_id } = req.body;
    const { type } = req;
    const { id } = req.params;
    
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
  }
};