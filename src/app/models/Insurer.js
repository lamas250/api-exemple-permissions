const { Model, DataTypes } = require('sequelize');

class Insurer extends Model {
	static init(sequelize) {
		super.init({
			title: DataTypes.STRING,
		},
		{
			sequelize
		});
  }
  static associate(models) {
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
		this.hasMany(models.Company, { foreignKey: 'insurance_id', as: 'companies' });
	}
}

module.exports = Insurer;