/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // filter by duration
  output = output.filter(trip => (trip.days >= filters.duration.from && trip.days <= filters.duration.to));

  // filter by tags
  if(filters.tags.length>-1){
    for(let tag of filters.tags){
      output = output.filter(trip => trip.tags.indexOf(tag) >= 0);
    }
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(
    (trip) => trip.id == tripId
  );

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(
    (trip) => trip.country.code == countryCode
  );

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
