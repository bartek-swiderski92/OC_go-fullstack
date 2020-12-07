const express = require('express');
const bodyParser = require('body-parser');
const Thing = require('./models/thing');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());


app.use('/api/stuff', (req, res, next) => {
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    thing.save().then(() => {
        res.status(201).json({
            message: 'Post saved successfully!'
        });
    }).catch((error) => {
        req.status(400).json({
            error: error
        });
    });
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