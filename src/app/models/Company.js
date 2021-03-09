const { Model, DataTypes } = require('sequelize');

class Company extends Model {
	static init(sequelize) {
		super.init({
			corporate_name: DataTypes.STRING,
			corporate_nickname: DataTypes.STRING,
		},
		{
			sequelize
		});
  }

  static associate(models) {
		this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
		this.belongsTo(models.Insurer, { foreignKey: 'insurance_id', as: 'insurance' });
	}
}

module.exports = Company;