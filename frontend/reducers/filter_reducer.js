import { UPDATE_BOUNDS } from '../actions/filter_actions';
import { merge } from 'lodash';

const defaultFilters = Object.freeze({
  bounds: {}
});

const filterReducer = (oldState = defaultFilters, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case UPDATE_BOUNDS:
      return action.bounds;
    default:
      return oldState;
  }
}

export default filterReducer;