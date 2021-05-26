//isitraukiam express is npm
const express = require('express');

//skuriam express app objekta
const app = express();

//main route
app.get('/', (req, res) => {
  res.send('<h1>Hello pacan backender from express</h1>');
});

app.listen(3000, () => console.log('server is running'));
