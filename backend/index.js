const express = require('express');
const bodyParser = require('body-parser');
const categories = require('./routes/categories');
const scores = require('./routes/scores');

const app = express();

// Port Number
const port = process.env.PORT || 3001;

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/categories', categories);
app.use('/scores', scores);

// Index Route
app.get('/', (req, res) => {
    res.send('nothing here!');
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports.app = app;