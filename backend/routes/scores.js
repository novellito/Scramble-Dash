const express = require('express');
const router = express.Router();
const config = require('../config/config');



router.get('/scoreList/all', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM highscores ORDER BY score DESC';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (score in results) {
            // console.log(results[word].word);
            data.push(results[score]);
        }
        res.send(data);
    });
    // connection.end();

});

router.get('/scoreList/:category', (req, res) => {
    // console.log(req.params.category);
    // res.send('hello');

    let data = [];
    let q = `SELECT * FROM highscores WHERE category="${req.params.category}" ORDER BY score DESC`;
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (score in results) {
            // console.log(results);
            data.push(results[score]);
        }
        res.send(data);
        // res.send('gi');
    });
//    config.connection.end();

});

router.post('/newScore', (req, res) => {

    let userInfo = {
        name: req.body.user,
        score: req.body.score,
        category: req.body.category
    };

    let q = `INSERT INTO highscores SET ?`
    config.connection.query(q, userInfo, function (err, result, fields) {
        if (err) throw error;
        console.log(result)
    });
    console.log(req.body);
});


module.exports = router;