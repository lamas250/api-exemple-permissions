const Insurer = require('../models/Insurer');

module.exports = {
  async index(req,res){
    // console.log(req.pemissions);
    const insurer_id = req.params.id;
    // console.log(insurer_id);

    const insurer = await Insurer.findByPk(insurer_id,{
      include: { association: 'companies' }
    });

    return res.json(insurer);
  },

  async store(req, res) {
    const {title, status_id} = req.body;
    const insurer = await Insurer.create({title, status_id});
  
    return res.json(insurer);
  }
};