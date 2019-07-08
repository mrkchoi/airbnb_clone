import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import filterReducer from './filter_reducer';
import searchReducer from './search_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  filters: filterReducer,
  search: searchReducer
});

export default uiReducer;