const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./configs/database');
const index = require('./routes/index');
const users = require('./routes/userRoutes');
const plants = require('./routes/plantRoutes');

db.connect();

app.use(cors());
app.use(express.json());

app.use('/', index);
app.use('/users', users);
app.use('/plants', plants);

module.exports = app