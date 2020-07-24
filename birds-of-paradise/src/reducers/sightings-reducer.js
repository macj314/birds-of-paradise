import * as c from '../actions/ActionTypes';

let initialState = {
  isLoading: false,
  sightings: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_SIGHTINGS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_SIGHTINGS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        sightings: action.sightings
      });
    case c.GET_SIGHTINGS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};