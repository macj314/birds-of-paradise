import sightingsReducer from '../../reducers/sightings-reducer';
import * as c from '../../actions/ActionTypes';

describe('sightingsReducer', () => {

  let action;
  
  const defaultState = {
    isLoading: false,
    sightings: [],
    error: null
  };

  const loadingState = {
    isLoading: false,
    sightings: [],
    error: null
  };

  test('should successfully return the default state if no action is passed into it', () => {
    expect(sightingsReducer(defaultState, {type: null })).toEqual(
      {
        isLoading: false,
        sightings: [],
        error: null
      }
    );
  });

  test('requesting sightings should successfully change isLoading from false to true', () => {
    action = {
      type: c.REQUEST_SIGHTINGS
    };

    expect(sightingsReducer(defaultState, action)).toEqual({
        isLoading: true,
        sightings: [],
        error: null
    });
  });

  test('successfully getting sightings should change isLoading to false and update sightings', () => {
    const sightings = "A sighting";
    action = {
      type: c.GET_SIGHTINGS_SUCCESS,
      sightings
    };

    expect(sightingsReducer(loadingState, action)).toEqual({
        isLoading: false,
        sightings: "A sighting",
        error: null
    });
  });

  test('failing to get sightings should change isLoading to false and add an error message', () => {
    const error = "An error";
    action = {
      type: c.GET_SIGHTINGS_FAILURE,
      error
    };

    expect(sightingsReducer(loadingState, action)).toEqual({
        isLoading: false,
        sightings: [],
        error: "An error"
    });
  });
});