const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require('../models/User');


router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    try {
        let user = await User.findOne({ email: email, password: password });
        if (!user) {
            res.json({ error: 'Invalid username or password' })
        }
        else {
            let token = jwt.sign({ id: user._id }, 'secretkey');
            res.json(token);
        }
    } catch (err) {
        res.send(err);
    }
})


// router.all('*', async (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]

//     try {
//         let decoded = await jwt.verify(token, 'secretkey');
//         next();
//     } catch (err) {
//         res.json(err);
//     }
// })



module.exports = router;