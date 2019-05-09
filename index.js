const express = require('express');
const cors = require('cors');
const NODE_ENV = process.env.NODE_ENV || 'dev';
global.__basedir = __dirname;

const app = express();

app.use(cors());
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

module.exports = app;
