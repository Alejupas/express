// isitraukiam express is npm
const express = require('express');
const path = require('path');

// sukuriam express app objekta
const app = express();

// Middle ware -- veiksmai vykstantys pries ar po serverio uzklausu
// logger
const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    } on: ${new Date().toLocaleTimeString()}`
  );
  next();
};

// naudoti logger funkcija kaip middle ware
app.use(logger);

// current paths

const htmlPath = path.join(__dirname, '../client', 'html');
const indexPath = path.join(__dirname, '../client', 'html', 'index.html');
const aboutPath = path.join(__dirname, '../client', 'html', 'about.html');
// console.log(' indexPath', indexPath);

// routes for pages
app.get('/', (req, res) => res.sendFile(indexPath));
app.get('/about', (req, res) => res.sendFile(aboutPath));

// api routes
app.use('/api/people', require('./routes/api/peopleApi'));

// kai turim papke kurios failus norim pasiekti is narsykles pagal pavadinimas
// nustatom static papke.
// app.use(express.static(htmlPath));

// paleidzia serveri ir klausosi http ir kt requestu nurodytu portu
app.listen(3000, () => console.log('server is running'));
