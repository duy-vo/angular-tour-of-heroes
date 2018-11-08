const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT || 4200;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '/dist/angular-tour-of-heroes')));
app.all('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/angular-tour-of-heroes/index.html'));
});

app.set('port', port);
server.listen(port, () => console.log('Running...'));