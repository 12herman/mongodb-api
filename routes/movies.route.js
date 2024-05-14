const express = require('express');

const router = express.Router();

// R - for reading  
router.get('/',(req,res)=>{
    res.send("Get all movie lists");
});

// C - for createig movies
router.post('/',(req,res)=>{
    res.send("Post all movie lists");
});

// U - for updating movies
router.post('/:id',(req,res)=>{
    res.send("Put single movie lists");
});

// D - for deleting movies
router.post('/:id',(req,res)=>{
    res.send("Delete single movie lists");
});

module.exports = router;