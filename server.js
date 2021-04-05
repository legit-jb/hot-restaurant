const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('/'));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/home', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/tables', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/tables.html'));
});

app.get('/reserve', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/reserve.html'));
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


// /reserve

// /waitlist

// /api/tables

// /api/waitlist

