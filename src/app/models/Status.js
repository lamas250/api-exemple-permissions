const { Model, DataTypes } = require('sequelize');

class Status extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
		},
		{
			sequelize
		});
  }
	static associate(models) {
		this.hasMany(models.Company, { foreignKey: 'status_id', as: 'status' });
		this.hasMany(models.Insurance, { foreignKey: 'status_id', as: 'status' });
	}
}

module.exports = Status;