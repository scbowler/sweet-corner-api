global.__basedir = __dirname;
const PORT = process.env.PORT || 9000;
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/error_handling');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('./db');
require('./routes')(app);

app.use(errorHandler);


app.listen(PORT, () => {
    console.log('Sweet Corner API Server Running on PORT:', PORT);
}).on('error', (err) => {
    console.log('/nSweet Corner API Listen Error on PORT:', PORT);
    console.log('/n/n LISTEN ERROR:', err);
});
