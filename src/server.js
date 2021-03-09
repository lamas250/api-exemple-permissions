const express = require('express');
const router = require('./routes/routes');

require('./database');

const app = express();
app.use(express.json());
app.use(router);


app.get('/', (req,res) =>{
  res.json({message: 'Teste'})
})

app.listen(3333, () => {
  console.log('Rodando na 3333');
});