const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const  SyncDb  = require('./config/index');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

const init = SyncDb();

require('./router')(app);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

