const express = require('express');
const app = express();
const beercon = require('./controllers/BeerControllers');
const pool = require('./db/connection');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

pool.connect();
const middleware = () => (req, res, next) => {
  // console.log(req.query);
  next();
};
app.get('/api/beer/geybyid', middleware(), beercon.getById);
app.post('/api/beer/create', middleware(), beercon.CehckCreate);
// app.post('/api/beer/create', middleware(), beercon.Create);

app.listen(3500, () => {
  console.log(`Server is running on port : 3500`);
});
