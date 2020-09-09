import compression from 'compression';
import cors from 'cors';
import express from 'express';
import logger from './lib/logger.js';
import handleError from './middlewares/handle-error.js';
import logQuery from './middlewares/log-query.js';
import postalCodesRouter from './routes/postal-codes.js';
import locationsRouter from './routes/locations.js';
import rateLimit from 'express-rate-limit';

const port = process.env.PORT || 4000;

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at: Promise ', promise, reason);
});

const app = express();

app.use(compression());
app.use(cors());

app.use('*', logQuery);

app.use(rateLimit({
  windowMs: 60 * 500, // 30 secondes
  max: 2, // limit each IP to 2 requests per windowMs
  message:
      "Too many accounts created from this IP, please try again in 30 seconds"
}))

app.get('/locations', locationsRouter);
app.get('/postal-codes', postalCodesRouter);

app.use(handleError);

app.listen(port, () => {
  logger.info(`Express listening on port ${port}`);
});
