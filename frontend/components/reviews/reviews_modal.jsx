import React from 'react';
import ListingShowReviewSingle from '../listings/listing_show/listing_show_review_single';

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.closeModal();
  }
  
  render() {
    let { reviews } = this.props;

    return (
      <div>ReviewsModal
        {reviews.map((review, idx) => <ListingShowReviewSingle review={review} key={idx}/> )}
        <button onClick={this.handleClick}>close</button>
      </div>
    );
  }
}

export default ReviewsModal;