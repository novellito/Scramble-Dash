//defines the routes to retrieve various words from a category
const express = require('express');
const router = express.Router();
const config = require('../config/config');

router.get('/sports', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM sports ORDER BY RAND() ';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (word in results) {
            data.push(results[word].word);
        }
    res.send(data);
    // res.send({data:data.length}); //used for mocha testing
    });

});

router.get('/music', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM musics ORDER BY RAND()';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (word in results) {
            data.push(results[word].word);
        }
    res.send(data);
    // res.send({data:data.length}); //used for mocha testing
    
    });

});

router.get('/food', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM foods ORDER BY RAND()';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (word in results) {
            data.push(results[word].word);
        }
    res.send(data);
    // res.send({data:data.length}); //used for mocha testing
    
    });

});


module.exports = router;
