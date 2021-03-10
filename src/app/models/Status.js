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
		this.hasMany(models.Company, { foreignKey: 'status_id' });
		this.hasMany(models.Insurer, { foreignKey: 'status_id' });
    this.hasMany(models.User, { foreignKey: 'status_id' });
	}
}

module.exports = Status;