import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('sighting reducer actions', () => {
  it('requestSightings should create REQUEST_SIGHTINGS action', () => {
    expect(actions.requestSightings()).toEqual({
      type: c.REQUEST_SIGHTINGS
    });
  });

  it('getSightingsSuccess should create GET_SIGHTINGS_SUCCESS action', () => {
    const sightings = "A sighting";
    expect(actions.getSightingsSuccess(sightings)).toEqual({
      type: c.GET_SIGHTINGS_SUCCESS,
      sightings
    });
  });

  it('getSightingsFailure should create GET_SIGHTINGS_FAILURE action', () => {
    const error = "An error";
    expect(actions.getSightingsFailure(error)).toEqual({
      type: c.GET_SIGHTINGS_FAILURE,
      error
    });
  });
});