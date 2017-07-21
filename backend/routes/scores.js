//Defines the routes for retrieving the scores as well as a route for submitting a new score
const express = require('express');
const router = express.Router();
const config = require('../config/config');

router.get('/scoreList/all', (req, res) => {

    let data = [];
    let q = 'SELECT * FROM highscores ORDER BY score DESC';
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (score in results) {
            data.push(results[score]);
        }
        res.send(data);
        
        // res.send({data:data, status:res.statusCode}); //used for mocha testing 
    });

});

router.get('/scoreList/:category', (req, res) => {
   
    let data = [];
    let q = `SELECT * FROM highscores WHERE category="${req.params.category}" ORDER BY score DESC`;
    config.connection.query(q, function (error, results, fields) {
        if (error) throw error;
        for (score in results) {
            data.push(results[score]);
        }
        res.send(data);

        // res.send({data:data, status:res.statusCode}); //used for mocha testing 
    });

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
    });
});


module.exports = router;