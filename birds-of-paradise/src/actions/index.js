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