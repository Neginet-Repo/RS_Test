const _ = require('lodash');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const firebase = require('firebase');
const url = require('url');

firebase.initializeApp({
  apiKey: "AIzaSyAajsPYHkgvYtGN7yNKqYhtavK9rYYM5LY",
  databaseURL: "https://rs-test-f5f36.firebaseio.com"
});

const app = express();
const corsOptions = {
    origin: 'http://localhost:8080'
};
const database = firebase.database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(corsOptions));

app.post('/user/login', (req, res) => {
    let ref = database.ref('users');

    ref.once('value')
        .then(snapshot => {
            return _.find(snapshot.val(), req.body);
        })
        .then(userFound => {
            if (userFound) {
                res.json({data: userFound, success: true});
            } else {
                res.json({error: 'Username or password incorrect.', success: false});
            }
        })
        .catch(error => {
            console.error(error);
        });
});

app.get('/user/data', (req, res) => {
    let query = url.parse(req.url, true).query;
    let ref = database.ref('users');

    ref.once('value')
        .then(snapshot => {
            return _.find(snapshot.val(), query);
        })
        .then(userFound => {
            if (userFound) {
                res.json({data: userFound, success: true});
            } else {
                res.json({error: 'Username does not exists.', success: false});
            }
        })
        .catch(error => {
            console.error(error);
        });
});


app.post('/user/sign-up', (req, res) => {
    let ref = database.ref('users');

    ref.once('value')
        .then(snapshot => {
            let userData = _.find(snapshot.val(), {username: req.body.username});
            let userDataKey;
            let newUserData = req.body;

            if (userData) {
                newUserData = _.extend({}, userData, req.body);
                userDataKey = _.findKey(snapshot.val(), {username: req.body.username});

                newUserData.types = _.union(userData.types, req.body.types);

                ref.set({
                    [userDataKey]: newUserData
                });
            } else {
                ref.push(newUserData);
            }

            return newUserData;
        })
        .then(userData => {
            res.json({data: userData, success: true});
        })
        .catch(error => {
            console.error(error);
        });
});

app.listen(3000, () => {
    console.log('Running on 3000');
});
