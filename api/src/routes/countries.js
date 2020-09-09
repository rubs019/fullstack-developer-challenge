import express from 'express';
import locations from '../models/locations.js';

const countriesRouter = express.Router();

countriesRouter.get('/countries', (req, res) => {
  const { query } = req;

  res.json({
    franchiseePerCountry: locations.find(query).length
  });
});

export default countriesRouter;
