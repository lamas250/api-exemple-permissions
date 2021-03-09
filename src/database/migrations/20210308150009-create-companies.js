'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('companies', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
		insurance_id: {
			type: Sequelize.INTEGER,
			references: {
				model: 'insurers',
				key: 'id',
			},
			onUpdate: 'CASCADE',
			onDelete: 'CASCADE',
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
		corporate_name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		corporate_nickname: {
			type: Sequelize.STRING,
			allowNull: true,
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

	down: (queryInterface, Sequelize) => queryInterface.dropTable('companies'),
};
