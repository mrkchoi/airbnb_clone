import { fetchListings } from "./listing_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS"; 

const changeBounds = (bounds) => {
  return ({
    type: UPDATE_BOUNDS,
    bounds: bounds
  });
}

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(changeBounds(bounds));
    return fetchListings(getState().ui.filters)(dispatch);
  }
};
