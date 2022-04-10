const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send(
        {
            msg: "Api is working"
        }
    );
});

app.get('/details', function (req, res) {
    res.send(
        {
            "name": "test_rest_api",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "Error: no test specified"
            },
            "author": "MD. Enamul Haque",
            "license": "ISC",
            "dependencies": {
                "express": "^4.17.3"
            },
            "dryCattles": [
                {
                    "tag_id": "050000000000079",
                    "age": "1 Y, 2 M, 16 D",
                    "totalDry": "0",
                    "lastDryDate": "N/A"
                },
                {
                    "tag_id": "050000000000081",
                    "age": "1 Y, 8 M, 16 D",
                    "totalDry": "0",
                    "lastDryDate": "N/A"
                },
                {
                    "tag_id": "050000000000083",
                    "age": "2 Y, 2 M, 0 D",
                    "totalDry": "0",
                    "lastDryDate": "N/A"
                },
                {
                    "tag_id": "050000000000084",
                    "age": "2 Y, 3 M, 4 D",
                    "totalDry": "0",
                    "lastDryDate": "N/A"
                },
                {
                    "tag_id": "050000000000091",
                    "age": "1 Y, 1 M, 18 D",
                    "totalDry": "0",
                    "lastDryDate": "N/A"
                },
                {
                    "tag_id": "050000000000094",
                    "age": "1 Y, 1 M, 18 D",
                    "totalDry": "0",
                    "lastDryDate": "N/A"
                },
                {
                    "tag_id": "050000000000095",
                    "age": "1 Y, 1 M, 18 D",
                    "totalDry": "0",
                    "lastDryDate": "N/A"
                }
            ]
        }
    );
});

app.listen('5000', () => console.log('App is running in http://localhost:5000/'));