const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
var cors = require('cors');

dotenv.config({ path: './config/config.env'});

const config = require('./config/config.js');
const reservations = require('./routes/reservations.route');
const assets = require('./routes/assets.route');
const test = require('./routes/test.route');

connectDB();

const app = express();

app.use(express.json());

app.use(cors());
    
app.use('/api', test);

app.use('/api/v1/reservations', reservations);
app.use('/api/v1/assets', assets);

app.listen(config.resourceServer.port, () => {
    console.log(`Resource Server Ready on port ${config.resourceServer.port}`);
});