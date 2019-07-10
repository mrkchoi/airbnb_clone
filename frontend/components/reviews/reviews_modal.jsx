import React from 'react';
import ListingShowReviewSingle from '../listings/listing_show/listing_show_review_single';

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }
  
  render() {
    let { reviews } = this.props;

    return (
      <div className="listingshow__reviewmodal-container">
        <a 
          href="#"
          className="listingshow__reviewmodal-btn-close modal__btn-close" 
          onClick={this.handleClick}>
            <i className="fas fa-times"></i>
          </a>
        <h3 className="listingshow__reviewmodal-header">
          {reviews.length} Reviews
        </h3>
        {reviews.map((review, idx) => <ListingShowReviewSingle review={review} key={idx} className="listingshow__review-single-modal" /> )}
      </div>
    );
  }
}

export default ReviewsModal;