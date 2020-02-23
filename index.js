const express = require('express');
const apiRoute = require('./routes/api/');
// const apiRouteTwo = require('./routes/apiTwo/');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// const appTwo = express();
// appTwo.use(bodyParser.json());
// appTwo.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*")
    next();
});


// appTwo.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "*")
//     next();
// });

app.use('/api', apiRoute, cors());

app.listen('3000',)

// const apiRouteTwo = require('./routes/apiTwo/');

// const appTwo = express();
// appTwo.use(bodyParser.json());
// appTwo.use(bodyParser.urlencoded({
//     extended: true
// }));

// appTwo.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "*")
//     next();
// });

// appTwo.use('/apiTwo', apiRouteTwo, cors());

// appTwo.listen('3000')