let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'Hello',
        message: 'World!'
    });
});

module.exports = router;