const express = require('express');

const router = express.Router();


router.get('/ifsc', (req, res)=> {

    console.log("Valid");
    res.json({
        msg: "Valid"
    });
 // SQL query goes here!
});

router.get('/city', (req, res) => {
    // SQL query goes here!
})

module.exports = router;