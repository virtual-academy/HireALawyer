const express = require('express')
const router = express();
const authRouter = require('../controllers/auth/index')
router.use('/auth', authRouter);

module.exports = router;