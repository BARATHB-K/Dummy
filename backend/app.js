
/// bULDwn3QwrbhkZzv


//hwHz2xkiqgXy6S7T
const bodyParser = require('body-parser');

const express = require("express");

const pino = require('express-pino-logger')();

const mongoose = require("mongoose");
const router = require("./routes/Home-routes");
const cors = require("cors");
const app = express();

const twilio = require('twilio');

const accountSid = 'ACcbf67c15af3f6fa0c63cff6c397abdba';
const authToken = '087d7e58caf02d5c351273d0bb631894';
const client = new twilio(accountSid, authToken);

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/home", router); // localhost:5000/books  ///home

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

//SEND TEXT
app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
        .create({
            from: "+14302643479",
            to: req.body.to,
            body: req.body.body
        })
        .then(() => {
            res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({ success: false }));
        });
});


mongoose
    .connect(
        "mongodb+srv://Barath:bULDwn3QwrbhkZzv@cluster0.or44r5i.mongodb.net/homeStore?retryWrites=true&w=majority"

    )
    .then(() => console.log("Connected To Database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log(err));
