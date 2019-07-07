import { UPDATE_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';

const defaultFilters = Object.freeze({
  bounds: {}
});

const filterReducer = (oldState = defaultFilters, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return merge({}, newState, newFilter);
    default:
      return oldState;
  }
}

export default filterReducer;