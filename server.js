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

app.get('/api/tables', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/tablesdb.json'));
});

app.get('/api/tables/:id', (req, res, next) => {
    let tables = JSON.parse(fs.readFileSync('tablesdb.json'));
    res.json(tables[Number(req.params.id)]);
});

app.post('/api/tables', (req, res, next) => {
    let tables = JSON.parse(fs.readFileSync('tablesdb.json'));
    let newTable = req.body;
    let tableID = (tables.length).toString();
    newTable.id = tableID;
    tables.push(newTable);

    fs.writeFileSync('tablesdb.json', JSON.stringify(tables));
    res.json(tables);
});

app.get('/reserve', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/reserve.html'));
});

app.get('/api/reserve/:id', (req, res, next) => {
    let reservations = JSON.parse(fs.readFileSync('reservedb.json'));
    res.json(reservations[Number(req.params.id)]);
});

app.post('/api/reserve', (req, res, next) => {
    let reservations = JSON.parse(fs.readFileSync('reservedb.json'));
    let newReservation = req.body;
    let reservationID = (reservations.length).toString();
    newReservation.id = reservationID;
    reservations.push(newTable);

    fs.writeFileSync('reservedb.json', JSON.stringify(reservations));
    res.json(reservations);
});

app.get('/api/waitlist', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/waitlistdb.json'));
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


