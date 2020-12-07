const express = require('express');

const app = express();



app.use('/api/stuff', (req, res, next) => {
    const stuff = [{
        _id: 'string',
        title: 'My first thing',
        description: 'All of the info about my first thing',
        imageUrl: '',
        price: 4900,
        userId: 'asdsdgfdfg'
    }, {
        _id: 'strings',
        title: 'My second thing',
        description: 'All of the info about my second thing',
        imageUrl: '',
        price: 2900,
        userId: 'asdsdgfdfg'
    }];
    res.status(200).json(stuff);
});

module.exports = app;