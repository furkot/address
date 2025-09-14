import { keys2values } from '../util/index.js';
import abbr2country from './countries.json' with { type: 'json' };

export const country2abbr = keys2values(abbr2country);
export { abbr2country };

// add some aliases
country2abbr['Brasil'] = 'BR';
country2abbr['Polska'] = 'PL';
country2abbr['United States'] = 'US';
country2abbr['United States of America'] = 'US';
country2abbr.USA = 'US';
