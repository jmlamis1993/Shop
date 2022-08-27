const express = require('express');
const cors = require('cors');
const app = express();
const morgan=require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



//Configuraciones
app.set('port', process.env.PORT || 5000);
app.set('json spaces', 2);

//Routes
app.use(require('./routes/index'));
app.use('/api/category', require('./routes/category'));
app.use('/api/product', require('./routes/product'));
app.use('/api/model', require('./routes/model'));
app.use('/api/sales', require('./routes/sales'));

//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});