const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Role = require('../app/models/Role');
const User = require('../app/models/User');
const Insurer = require('../app/models/Insurer');
const Company = require('../app/models/Company');
const Status = require('../app/models/Status');

const connection = new Sequelize(dbConfig);

Status.init(connection);
User.init(connection);
Role.init(connection);
Insurer.init(connection);
Company.init(connection);

Company.associate(connection.models);
Insurer.associate(connection.models);
// Status.associate(connection.models);


module.exports = connection;