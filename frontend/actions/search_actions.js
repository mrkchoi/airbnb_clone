export const UPDATE_SEARCH_COORDS = "UPDATE_SEARCH_COORDS";

export const updateSearchCoords = (lat, lng) => {
  return ({
    type: UPDATE_SEARCH_COORDS,
    coords: {
      lat: lat,
      lng: lng
    }
  })
};

