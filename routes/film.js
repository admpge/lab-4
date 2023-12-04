const express = require('express');
const router = express.Router();

const Film = require('../models/Film');
const verifyToken = require('../verifyToken.js');

router.get('/', verifyToken, async (req, res) => {
    try {
        const films = await Film.find();
        res.send(films);
    } catch (err) {
        res.status(400).send({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const film = await Film.findById(req.params.id);
        res.send(film);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
