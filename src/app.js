const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const  SyncDb  = require('./config/index');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/pages');

const init = SyncDb();


require('./router')(app);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

