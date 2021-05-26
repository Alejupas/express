//isitraukiam express is npm
const express = require('express');
const path = require('path');

const { people } = require('./js/people');
//skuriam express app objekta
const app = express();

// current paths
const htmlPath = path.join(__dirname, 'html');
const indexPath = path.join(__dirname, 'html', 'index.html');
const aboutPath = path.join(__dirname, 'html', 'about.html');
// console.log('indexPath', indexPath);

// kai turim papke kurios failus norim pasiekti is narsykles pagal pavadinimus ,
// nustatom static papke
app.use(express.static(htmlPath));

//main route
app.get('/', (req, res) => {
  //   res.send('<h1>Hello pacan backender from express</h1>');
  res.sendFile(indexPath);
});
// app.get('/about', (req, res) => res.sendFile(aboutPath));

// console.log('works');

// OUR API
app.get('/api/people', (req, res) => {
  //grazinam json
  res.json(people);
});

//get one person
app.get('/api/person/:id', (req, res) => {
  const paramId = req.params.id;
  const found = people.find((person) => person.id === paramId);

  if (!found) {
    res
      .status(404)
      .json({ errorMsg: `sorry, person with id ${paramId} was not found` });
  }
  //paziurim parametra
  //   res.send(`id you are looking for ${paramId}`);
  res.json(found);
});

//paleidzia serveri ir klausosi http ir kt requestu nurodytu portu
app.listen(3000, () => console.log('server is running'));
