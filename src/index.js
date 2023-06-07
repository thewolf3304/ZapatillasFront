const express = require('express');
const helmet = require('helmet')
const morgan = require('morgan');

const productRoutes = require('./routes/product.routes');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet())
app.use(express.urlencoded({extended:false}));

app.use("/products", productRoutes);

app.listen(3000, () => {
    console.log('Servidor en ejecución en el puerto 3000');
  });