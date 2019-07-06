
export const fetchListings = (filters) => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings`,
    filters
  });
}

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${id}`
  });
}

export const createListing = listing => {
  return $.ajax({
    method: 'POST',
    url: `/api/listings`,
    data: { listing }
  });
}

export const updateListing = listing => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/listings/${listing.id}`,
    data: { listing }
  });
}

export const deleteListing = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/listings/${id}`
  });
}

dispatch(fetchListings({
  northEast: {lat: "37.792266", lng: "-122.399775"},
  southWest: {lat: "37.787823", lng: "-122.405092"}
}))
  .then(res => console.log(res));
