const express = require('express');
const path = require('path');
const tasksRouter = require('./routes/tasks');
const logEvent = require('./middlewares/logEvents');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

//TODO: Need to move the logic to separate handler similar to errorHandler
app.use((req, res, next) => {
    logEvent(`${req.method}\t${req.headers.origin}\t${req.url}\n`, 'requestTracing.txt');
    console.log(`${req.method}\t${req.path}`);
    next();
});

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about(.html)?', (req, res) => {
    //throw(new Error('Something went wrong'));
    res.sendFile('./views/about.html', { root: __dirname});
});

app.get('/tasks(.html)?', (req, res) => {
    res.sendFile('./views/tasks.html', { root: __dirname});
});

app.get('/create(.html)?', (req, res) => {
    res.sendFile('./views/create.html', { root: __dirname});
});

app.get('/menu(.html)?', (req, res) => {
    res.sendFile('./views/menu.html', { root: __dirname});
});

app.get('/buy(.html)?', (req, res) => {
    res.sendFile('./views/buy.html', { root: __dirname});
});

// /api/tasks/4
app.use('/api/tasks', tasksRouter);
app.use('/api/times', require('./routes/times'));

app.use(require('./middlewares/errorHandler'));

app.listen(PORT, () => {
    logEvent(`Server starts listening on port ${PORT}`, 'ServerEvents.txt');
    console.log(`Server starts listening on port ${PORT}`);
});