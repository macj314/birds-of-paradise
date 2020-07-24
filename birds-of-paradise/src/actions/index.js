import * as c from './ActionTypes';

export const requestSightings = () => ({
  type: c.REQUEST_SIGHTINGS
});

export const getSightingsSuccess = (sightings) => ({
  type: c.GET_SIGHTINGS_SUCCESS,
  sightings
});

export const getSightingsFailure = (error) => ({
  type: c.GET_SIGHTINGS_FAILURE,
  error
});

export const sightingsByRegion = () => {
  return dispatch => {
    dispatch(requestPlaces);
    return fetch('https://api.ebird.org/v2/data/obs/US-WA-033/recent', {headers: {"X-eBirdApiToken": `${process.env.REACT_APP_API_KEY}`}})
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {dispatch(getPlacesSuccess(jsonifiedResponse.results));})
    .catch((error) => {
      dispatch(getPlacesFailure(error));
    });
  }
}