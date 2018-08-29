const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Product} = require('./model/product');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/product', (req, res) => {
    var product = new Product({
        name: req.body.name,
        price: req.body.price,
        price_old: req.body.price_old,
        sale_percent: req.body.sale_percent,
        key_features: req.body.key_features,
        image_url: req.body.image_url
    });
    product.save().then((doc) => {
        res.send(doc);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Started up server on ${port}`);
});