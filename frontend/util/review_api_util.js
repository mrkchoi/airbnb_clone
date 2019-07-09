
export const fetchReviews = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/reviews`
  })
}

export const fetchReviewsByListingId = (listingId) => {
  return $.ajax({
    method: "GET",
    url: `/api/reviews?listing_id=${listingId}`
  });
}
