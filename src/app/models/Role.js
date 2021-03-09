const { Model, DataTypes } = require('sequelize');

class Role extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
			slug: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize
		});
  }
  static associate(models) {
		this.hasMany(models.Users, { foreignKey: 'role_id', as: 'users' });
	}
}

module.exports = Role;