const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());


app.use('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201.).json({
        message: 'Thing created successfully!'
    })
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [{
        _id: 'string',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: 'https://www.nextdaycamera.co.uk/acatalog/canon-5d-mark-iv-24-105.jpg',
        price: 4900,
        userId: 'asdsdgfdfg'
    }, {
        _id: 'strings',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: 'https://www.nextdaycamera.co.uk/acatalog/canon-5d-mark-iv-24-105.jpg',
        price: 2900,
        userId: 'asdsdgfdfg'
    }];
    res.status(200).json(stuff);
});

module.exports = app;