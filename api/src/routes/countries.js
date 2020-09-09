import express from 'express';
import countries from '../models/countries.js';

const countriesRouter = express.Router();

countriesRouter.get('/countries', (req, res) => {
  const { query } = req;

  res.json({
    franchiseePerCountry: countries.find(query).length
  });
});

export default countriesRouter;
