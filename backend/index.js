const express = require('express');
const bodyParser = require('body-parser');
const categories = require('./routes/categories');
const scores = require('./routes/scores');

const app = express();
app.use(express.static(path.join(__dirname, 'scramble-dash/build')));

// Port Number
const port = process.env.PORT || 5000;

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/categories', categories);
app.use('/scores', scores);

// Index Route
app.get('/', (req, res) => {
    res.send('nothing here!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/scramble-dash/build/index.html'));
});


app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports.app = app;