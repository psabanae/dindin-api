const express = require('express');
const cors = require('cors');

const path = require('path');


const routes = require('./routes/');


const app = express();

app.use(cors());
app.use(routes);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);    

app.use(errorController.getError);


app.listen(4000, () => console.log('Servidor rodando na porta 4000;'));