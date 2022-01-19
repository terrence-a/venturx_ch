'use strict';

const express = require('express');
const PORT = 3000;
const app = express();

app.get('/greetings/:name', (req, res)=> {
    res.send(`Hello, ${req.params.name}`)
})

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})
