const { Model, DataTypes } = require('sequelize');

class Permission extends Model {
	static init(sequelize) {
		super.init({
			name: DataTypes.STRING,
		},
		{
			sequelize
		});
  }
  static associate(models) {
    this.belongsTo(models.PermissionGroup, 
      { foreignKey: 'permission_group_id', as: 'permission_group' });
	}
}

module.exports = Permission;