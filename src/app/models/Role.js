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
		this.hasMany(models.User, { foreignKey: 'role_id', as: 'users' });
    this.belongsToMany(models.Permission, 
      {through: 'role_permissions', foreignKey: 'role_id'});
	}
}

module.exports = Role;