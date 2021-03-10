const express = require('express');
const Permission = require('./app/models/Permission');
const Role = require('./app/models/Role');
const User = require('./app/models/User');
const { use } = require('./routes/routes');
const router = require('./routes/routes');

require('./database');

const app = express();
app.use(express.json());

app.use(router);



app.listen(3333, () => {
  console.log('Rodando na 3333');
});