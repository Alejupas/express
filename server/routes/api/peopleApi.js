const express = require('express');
const router = express.Router();

const people = require('../../js/peopleData');

// get all people Endpoint
router.get('/', (req, res) => {
  // grazinam json
  res.json(people);
});
// get one people Endpoint
router.get('/:id', (req, res) => {
  const paramId = req.params.id;

  const found = people.find((p) => p.id === paramId);

  if (!found) {
    res
      .status(404)
      .json({ errorMsg: `sorry person with id ${paramId} was not found` });
  }

  // grazinam json
  res.json(found);
});

// Create on people Endpoint
// gauti duomenis is vartotojo formos arba json pavidalu ir sukurti nauja vartotoja tarp savo people
router.post('/', (req, res) => {
  console.log('req body', req.body);
  res.send(req.body);
});

module.exports = router;
