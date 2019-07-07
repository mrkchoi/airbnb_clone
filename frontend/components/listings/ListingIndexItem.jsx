import React from 'react';
import Carousel from 'nuka-carousel';

class ListingIndexItem extends React.Component {
  render() {
    let {
      listing_type,
      title,
      num_guests,
      num_beds,
      num_baths,
      parking,
      wifi,
      kitchen,
      washer,
      price,
      photoUrls,
      average_rating,
      num_reviews
    } = this.props.listing;
    // let num_reviews = this.props.listings.reviews.length;

    return (
      <div className="listingindexitem__main">
        <div className="listingindexitem__carousel-wrapper">
          <Carousel width={"300px"} heightMode={"first"} wrapAround={true}>
            {photoUrls.map((photo, idx) => {
              if (idx < 4) {
                return (
                  <img
                    src={photo}
                    key={idx}
                    className="listingindexitem__carousel-item"
                  />
                );
              }
            })}
          </Carousel>
        </div>

        <div className="listingindexitem__content-wrapper">
          <div className="listingindexitem__content-top">
            <div className="listingindexitem__content-flair">
              <p className="listingindexitem__content-flair-verified">
                <span>Plus</span> Verified
              </p>
              <span className="listingindexitem__content-flair-separator">
                &nbsp; &#8226; &nbsp;
              </span>
              <p className="listingindexitem__content-flair-type">
                {listing_type}
              </p>
            </div>
            <h2 className="listingindexitem__content-title">{title}</h2>

            <div className="listingindexitem__content-stats">
              <p className="listingindexitem__content-stats-inner">
                {num_guests} guests &nbsp;<span>&#8226;</span>&nbsp;{" "}
                {listing_type}&nbsp; <span>&#8226;</span>&nbsp; {num_beds}{" "}
                bed(s) &nbsp;<span>&#8226;</span>&nbsp; {num_baths} bath(s)
              </p>
            </div>
            <div className="listingindexitem__content-amenities">
              <p className="listingindexitem__content-amenities-inner">
                {parking ? "free parking" : ""} &nbsp;<span>&#8226;</span>{" "}
                &nbsp;{wifi ? "wifi" : ""} &nbsp;<span>&#8226;</span>&nbsp;{" "}
                {kitchen ? "kitchen" : ""} &nbsp;<span>&#8226;</span>&nbsp;{" "}
                {washer ? "washer" : ""}
              </p>
            </div>
          </div>

          <div className="listingindexitem__content-bottom">
            <div className="listingindexitem__content-reviews">
              <p className="listingindexitem__content-reviews-total">
                <i className="fas fa-star" />
                {average_rating}
                <span>({num_reviews})</span>
              </p>
            </div>
            <div className="listingindexitem__content-pricing">
              <p className="listingindexitem__content-pricing-price">
                ${price}/night
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingIndexItem;