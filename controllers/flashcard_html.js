const express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = {
    router
};