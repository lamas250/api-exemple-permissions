'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('insurers', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
		title: {
			type: Sequelize.CHAR(55),
			allowNull: false,
		},
    status_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'status',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			allowNull: false,
		},
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

	}),

	down: (queryInterface, Sequelize) => queryInterface.dropTable('insurers'),
};
