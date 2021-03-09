'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      come_from_type: {
        type: Sequelize.STRING,
      },
      come_from_id: {
        type: Sequelize.INTEGER
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
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
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

    });
     
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');

  }
};
