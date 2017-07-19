const express = require('express');
const router = express.Router();
const config = require('../config/config');


router.get('/sports', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM sports ORDER BY RAND() ';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (word in results) {
            // console.log(results[word].word);
            data.push(results[word].word);
        }
    res.send(data);
    });

});

router.get('/music', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM musics ORDER BY RAND()';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (word in results) {
            // console.log(results[word].word);
            data.push(results[word].word);
        }
    res.send(data);
    });

});


module.exports = router;
