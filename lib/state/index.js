import { keys2values } from '../util/index.js';
import ca from './ca.json' with { type: 'json' };
import us from './us.json' with { type: 'json' };

export const country2states = {
  CA: keys2values(ca),
  US: keys2values(us)
};

export const abbr2state = Object.assign(Object.create(null), country2states.US, country2states.CA);
export const state2abbr = keys2values(abbr2state);
export const state2country = Object.entries(country2states).reduce(
  (obj, [country, states]) =>
    // biome-ignore lint/performance/noAccumulatingSpread: FIXME
    Object.assign(
      obj,
      Object.keys(states).reduce((obj, state) => {
        obj[state] = country;
        return obj;
      }, obj)
    ),
  Object.create(null)
);
