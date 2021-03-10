const Company = require('../models/Company');
const Insurer = require('../models/Insurer');
const { index } = require('./InsurerController');

module.exports = {
  async index(req,res){
    const company_id = req.params.id;

    const company = await Company.findByPk(company_id);

    return res.json(company);
  },

  async store(req, res) {
    const {corporate_name, corporate_nickname, status_id} = req.body;
    const  insurance_id  = req.params.id;
    
    const insurer = await Insurer.findByPk(insurance_id);

    if(!insurer){
      return res.status(400).json({error: "Seguradora nao encontrada."});
    }
    
    const company = await Company.create({
      insurance_id,status_id, corporate_name, corporate_nickname
    });
  
    return res.json(company);
  }
};