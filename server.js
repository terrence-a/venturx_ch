'use strict';

const express = require('express');
const PORT = 8080;
const app = express();

// The requested "/greetings/:name" route. 
app.get('/greetings/:name', (req, res)=> {
    res.send(`Hello, ${req.params.name}!`)
})

//default route. All routes except "/greetings/:name" go to here.
app.use(function(req, res){
    res.status(404).send("Invalid Route")
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})
