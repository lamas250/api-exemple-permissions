const { Model, DataTypes } = require('sequelize');

class User extends Model {
	static init(sequelize) {
		super.init({
			come_from_type: DataTypes.STRING,
			come_from_id: DataTypes.INTEGER,
			name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
		},
		{
			sequelize
		});
  }
  static associate(models) {
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
    this.belongsTo(models.Role, { foreignKey: 'role_id' });    
	}
}

module.exports = User;