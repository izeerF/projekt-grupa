const path = require('path');
const express = require('express');
const app = express();
let port = 8080;

app.set('view engine', 'ejs');
 
var autoRoutes = require('express-auto-routes')(app); // you don't need `routes` folder any more
autoRoutes(path.join(__dirname, './routes')); // auto mounting... done!
 
// ...other configures
 
app.listen(port);