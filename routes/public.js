const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Public View')
})

module.exports = router;