const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { log } = require('console');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.route('/calculator')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'bmicalculator.html'));
  })
  .post((req, res) => {
    const weight = parseFloat(req.body.weight);
    const heightCm = parseFloat(req.body.height); 

    console.log(weight);
    console.log(heightCm);

    const heightM = heightCm / 100;

    if (isNaN(weight) || isNaN(heightM) || weight <= 0 || heightM <= 0) {
      res.status(400).send('Invalid input. Please enter valid weight and height.');
    } else {
      const bmi = (weight / Math.pow(heightM, 2)).toFixed(2);

      res.send(`Your BMI is: ${bmi}`);
    }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
