// const { Model, DataTypes } = require('sequelize');

// class RolePermissions extends Model {
// 	static init(sequelize) {
// 		super.init({

// 		},
// 		{
// 			sequelize,
//       tableName: 'RolePermissions_permissions',
// 		});
//   }
//   static associate(models) {
// 		this.belongsToMany(models.Role, { foreignKey: 'role_id' });
//     this.belongsToMany(models.Permission, { foreignKey: 'permission_id' });
// 	}
// }

// module.exports = RolePermissions;