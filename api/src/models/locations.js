import csvParse from 'csv-parse/lib/sync.js';
import EventEmitter from 'events';
import fs from 'fs';
import path from 'path';
import filterByRegExp from '../lib/filter-by-reg-exp.js';
import logger from '../lib/logger.js';

class LocationsDataContainer extends EventEmitter {
  constructor() {
    super();

    this.data = null;
    this.init();
  }

  async init() {
    try {
      logger.info('Locations data container: Initializing…');

      // Load locations from CSV data file
      this.data = csvParse(
        fs.readFileSync(
          path.resolve('./data/sample-locations.csv').toString()
        ),
        { columns: true }
      );

      logger.info('Locations data container: Initialized.');
      this.emit('initialized');
    } catch (initError) {
      logger.error(initError);
      this.emit('error', initError);
    }
  }

  assertInitialized() {
    if (this.data === null) {
      throw new Error('Locations data container is not initialized');
    }
  }

  find(query) {
    this.assertInitialized();

    return filterByRegExp(this.data, query.filter((postalCodesData) => {
      return !!postalCodesData.postalCode
    }));
  }
}

const db = new LocationsDataContainer();

export default db;
