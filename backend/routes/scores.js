const express = require('express');
const router = express.Router();
const config = require('../config/config');


module.exports = router;

router.get('/scoreList', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM highscores';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (score in results) {
            // console.log(results[word].word);
            data.push(results[score]);
        }
    res.send(data);
    });

});