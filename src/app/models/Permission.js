const { Model, DataTypes } = require('sequelize');

class Permission extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
		},
		{
			sequelize,
		});
  }
  static associate(models) {
    // this.belongsTo(models.PermissionGroup, 
    //   { foreignKey: 'permission_group_id', as: 'permission_group' });
    this.belongsToMany(models.Role, 
      {through: 'role_permissions', foreignKey: 'permission_id'});
  };

}

module.exports = Permission;