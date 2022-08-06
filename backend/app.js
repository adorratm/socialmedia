const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'});
// Create Our Express App
const app = express();

const PORT = process.env.PORT || 5000;

// Handle Cors + Middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
    res.header('Access-Control-Allow-Headers', 'auth-token, Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Database Stuff

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?serverSelectionTimeoutMS=${process.env.DB_SELECTION_TIMEOUT}&connectTimeoutMS=${process.env.DB_CONNECTION_TIMEOUT}&authSource=${process.env.DB_AUTH_SOURCE}&authMechanism=${process.env.DB_AUTH_MECHANISM}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
    res.send('Yay Home Page')
});

const UsersRoute = require('./routes/Users');

app.use('/users',UsersRoute);




app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))