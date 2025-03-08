const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');

const middleware = (req, res, next) => {
    console.log("Middleware");

    console.log("Age", req.query.age);
    next();

    if (req.query.age >= 18) {
        next();
    } else {
        res.send("your age is not requrid");
    }
}

app.use(middleware);
app.use((req, res, next) => {
    console.log("Middleware 1");
    next()
})

app.use('/', express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/users', (req, res) => {
    res.render('users');
})

app.listen(port, () => console.log("Server is started !!"))