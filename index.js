const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { maxAge, secret } = require('./config').cookies;
const NODE_ENV = process.env.NODE_ENV || 'production';
global.__basedir = __dirname;

const app = express();

app.use(cors());
app.use(cookieParser(secret, { maxAge }));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./db');
require('./routes')(app);

if(NODE_ENV !== 'production'){
    const PORT = process.env.PORT || 9000;

    app.listen(PORT, () => {
        console.log('Sweet Corner API Server Running on PORT:', PORT);
    }).on('error', (err) => {
        console.log('/nSweet Corner API Listen Error on PORT:', PORT);
        console.log('/n/n LISTEN ERROR:', err);
    });
}

exports.app = app;
