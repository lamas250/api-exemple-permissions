const Insurer = require('../models/Insurer');

module.exports = {
  async index(){

  },

  async store(req, res) {
    const {title, status_id} = req.body;
    const insurer = await Insurer.create({title, status_id});
  
    return res.json(insurer);
  }
};