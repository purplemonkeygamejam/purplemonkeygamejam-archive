var fs = require('fs');

var express = require('express');
var server = express();

server.engine('html', require('ejs').renderFile);

server.get('/', function (req, res) {

    res.render('index.html', { title: 'Index' });

});

server.get('/archive/:id', function (req, res) {

    fs.readFile(__dirname + '/data/' + req.params.id + '.json', 'utf8', function (err, data) {

        if (data) {

            res.render('archive.html', JSON.parse(data));

        } else {

            res.send(404);

        }

    });

});

server.use(express.static(__dirname + '/static'));

server.listen(process.env.PORT || 5000);
