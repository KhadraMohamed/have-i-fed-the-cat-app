const express = require('express');

const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    res.status(201).json(req.body)
})
app.get('/cats' , (req, res) => {
    res.send('HELLO KITTY CAT')
})


module.exports = app;