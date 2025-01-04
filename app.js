const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Alfred');
});

app.post('/form-submission', (req, res) => {
    res.send('The form has been submitted');
});

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
});
