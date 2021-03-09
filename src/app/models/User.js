const { Model, DataTypes } = require('sequelize');

class User extends Model {
	static init(sequelize) {
		super.init({
			come_from_type: DataTypes.STRING,
			come_from_id: DataTypes.INTEGER,
			name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      // status_id: DataTypes.INTEGER,
      role_id: DataTypes.INTEGER
		},
		{
			sequelize
		});
  }
  static associate(models) {
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
    // this.belongsTo(models.Roles, { foreignKey: 'role_id', as: 'role' });    
	}
}

module.exports = User;