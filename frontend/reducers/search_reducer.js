import { UPDATE_SEARCH_COORDS } from '../actions/search_actions';

const defaultState = {
  coords: {
    lat: 37.773972,
    lng: -122.431297
  }
};

const searchReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case UPDATE_SEARCH_COORDS:
      return { coords: action.coords };
    default:
      return defaultState;
  }
};

export default searchReducer;
