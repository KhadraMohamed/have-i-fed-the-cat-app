const express = require('express');
const { Cat } = require('./models');

const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => 
    res.status(201).json(cat))
})
app.get('/cats' , (req, res) => {
    Cat.findAll({ where: req.query }).then(cat =>
    res.status(201).json(cat))
})
app.get('/cats/:catId', (req, res) => {
    Cat.findByPk(req.params.catId)
})
app.patch('/cats/:catId', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.catId } })
})
app.delete('/cats/:catId', (req, res) => {
    Cat.destroy({ where: { id: ID_TO_DELETE } })
})


module.exports = app;