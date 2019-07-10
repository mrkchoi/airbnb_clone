import React from 'react'

class ListingShowReviewSingle extends React.Component {
  componentDidMount() {
    
  }
  
  render() {
    let { review } = this.props;
    return (
      <div className="listingshow__review-single-container">
        <div className="listingshow__review-single-profile">
          <div className="listingshow__review-single-photo" style={{ backgroundImage: `url(${review.photoUrl})` }}></div>
          <div className="listingshow__review-single-userinfo">
            <h4 className="listingshow__review-single-name">
              {review.firstname}
            </h4>
            <p className="listingshow__review-single-date">
              {/* a month ago (place date here) */}
            </p>
          </div>
        </div>
        <div className="listingshow__review-single-review">
          <p className="listingshow__review-single-text">
            {review.review}
          </p>
        </div>
      </div>
    )
  }
}

export default ListingShowReviewSingle;