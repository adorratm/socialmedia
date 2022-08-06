const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });
// Create Our Express App
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
    res.send('Yay Home Page')
});

const UsersRoute = require('./routes/Users');
const authRouter = require('./routes/authRouter');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use('/api/users', UsersRoute);
app.use("/api/auth/", authRouter);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});



// Database Stuff

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?serverSelectionTimeoutMS=${process.env.DB_SELECTION_TIMEOUT}&connectTimeoutMS=${process.env.DB_CONNECTION_TIMEOUT}&authSource=${process.env.DB_AUTH_SOURCE}&authMechanism=${process.env.DB_AUTH_MECHANISM}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
}).catch((err) => console.log(err));

