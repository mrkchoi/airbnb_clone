import React from 'react';
import Header from '../navbar/header';
import PulseLoader from '../loaders/pulse_loader';
import ListingShowFooter from '../listings/listing_show/listing_show_footer';
import RenderStars from '../stars/render_stars';
import Moment from 'react-moment';
import moment from 'moment';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      host: null,
      
      startMonth: null,
      startDayNum: null,
      startDay: null,
      endMonth: null,
      endDayNum: null,
      startDay: null,
      endDay: null,
      numGuests: null,
      bookingFromDate: null,
      bookingToDate: null,
      pricePerNight: null,
      cleaningFee: .04,
      serviceFee: 0.08,
      taxRate: 0.10,
      total: null,
      subtotal: null
    }

    this.calculateTotal = this.calculateTotal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.calculateTotal();
    this.props.fetchListing(this.props.listingId);
  }
  
  calculateTotal() {
    let { bookingParams } = this.props;
    let numDays = moment(bookingParams.end_date).diff(bookingParams.start_date, 'days');
    let bookingSubtotal = parseFloat((this.props.listing.price * numDays));
    let cleaningFee = parseFloat((bookingSubtotal * this.state.cleaningFee));
    let serviceFee = parseFloat((bookingSubtotal * this.state.serviceFee));
    let taxes = parseFloat((bookingSubtotal * this.state.taxRate));
    let total = (bookingSubtotal + cleaningFee + serviceFee + taxes).toFixed(2);

    this.setState({
      total: total,
      taxRate: taxes.toFixed(2),
      subtotal: bookingSubtotal.toFixed(2),
      cleaningFee: cleaningFee.toFixed(2),
      serviceFee: serviceFee.toFixed(2)
    });

    setTimeout(() => {
      this.setState({loading: false});
    }, 1500);
  }

  handleSubmit(e) {
    e.preventDefault();

    let bookingParams = {
      start_date: new Date(this.props.bookingParams.start_date),
      end_date: new Date(this.props.bookingParams.end_date),
      num_guests: this.props.bookingParams.num_guests,
      listing_id: this.props.bookingParams.listing_id,
      user_id: this.props.currentUser.id
    };

    this.props.createBooking(bookingParams)
      .then(() => this.props.history.push(`/trips/${this.props.currentUser.id}`));
    
  }

  render() {
    let { currentUser, listing, bookingParams } = this.props;
    if (this.state.loading || !listing) {
      return (
        <div className="loader__container">
          <PulseLoader />
        </div>
      );
    }
    
    return (
      <div className="checkout__container">
        <Header type={"header__checkout"} currentUser={currentUser} />
        <div className="checkout__main-outer-container">
          <div className="checkout__main-inner-container">
            <div className="checkout__main-wrapper">
              <div className="checkout__header-container">
                <h2 className="checkout__header">Review house rules</h2>
              </div>

              <div className="checkout__rarefind-container">
                <div className="checkout__rarefind-icon-wrapper">
                  <div className="checkout__rarefind-icon">

                  </div>
                </div>
                <div className="checkout__rarefind-content">
                  <p className="checkout__rarefind-text">
                    <span>
                      This is a rare find.
                    </span> 
                      This place is usually booked.
                  </p>
                </div>
              </div>

              <div className="checkout__nights-wrapper">
                <h3 className="checkout__nights-header">
                    <Moment duration={bookingParams.start_date} date={bookingParams.end_date}/> in San Francisco</h3>
                <div className="checkout__nights-checkinout-wrapper">
                  <div className="checkout__nights-check-in-outer">
                    <div className="checkout__nights-date-outer">
                      <p className="checkout__nights-date-month">DEC</p>
                      <p className="checkout__nights-date-day">
                        <Moment format="DD">
                          {bookingParams.start_date}
                        </Moment>
                      </p>
                    </div>
                    <div className="checkout__nights-text-wrapper">
                      <p className="checkout__nights-day-check-in">
                      <Moment format="ddd">
                          {bookingParams.start_date}
                        </Moment> check-in
                      </p>
                      <p className="checkout__nights-time-check-in">
                        After 2PM
                      </p>
                    </div>
                  </div>
                  <div className="checkout__nights-check-out-outer">
                    <div className="checkout__nights-date-outer">
                      <p className="checkout__nights-date-month">DEC</p>
                      <p className="checkout__nights-date-day">
                          <Moment format="DD">
                            {bookingParams.end_date}
                          </Moment>
                      </p>
                    </div>
                    <div className="checkout__nights-text-wrapper">
                      <p className="checkout__nights-day-check-in">
                          <Moment format="ddd">
                            {bookingParams.end_date}
                          </Moment> check-out
                      </p>
                      <p className="checkout__nights-time-check-in">
                        11AM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="checkout__nights-self-check-in-wrapper">
                  <div className="checkout__nights-self-check-in-icon-wrapper">
                    <div className="checkout__nights-self-check-in-icon"></div>
                  </div>
                  <div className="checkout__nights-self-check-in-text">
                    Self check-in with lockbox
                  </div>
                </div>
              </div>

              <div className="checkout__mind-wrapper">
                <h3 className="checkout__mind-header">
                  Things to keep in mind
                </h3>
                <div className="checkout__mind-detail-wrapper">
                  <div className="checkout__mind-detail-item">
                    <div className="checkout__mind-detail-icon-wrapper">
                      <div className="checkout__mind-detail-icon" id="children">
                        
                      </div>
                    </div>
                    <p className="checkout__mind-detail-text">
                      Not suitable for children and infants
                    </p>
                  </div>
                  <div className="checkout__mind-detail-item">
                    <div className="checkout__mind-detail-icon-wrapper">
                      <div className="checkout__mind-detail-icon" id="pets">

                      </div>
                    </div>
                    <p className="checkout__mind-detail-text">
                        No pets
                    </p>
                  </div>
                  <div className="checkout__mind-detail-item">
                    <div className="checkout__mind-detail-icon-wrapper">
                      <div className="checkout__mind-detail-icon" id="parties">

                      </div>
                    </div>
                    <p className="checkout__mind-detail-text">
                        No parties or events
                    </p>
                  </div>
                  <div className="checkout__mind-detail-item">
                    <div className="checkout__mind-detail-icon-wrapper">
                      <div className="checkout__mind-detail-icon" id="smoking">

                      </div>
                    </div>
                    <p className="checkout__mind-detail-text">
                        No smoking
                    </p>
                  </div>
                </div>
              </div>

              <div className="checkout__btn-wrapper">
                <a href="#" className="checkout__btn" onClick={this.handleSubmit}>Agree and book</a>
              </div>
            </div>
            <div className="checkout__sidebar-wrapper">
              <div className="checkout__sidebar-recap-wrapper">
                <div className="checkout__sidebar-recap-desc-wrapper">
                  <h4 className="checkout__sidebar-recap-header">
                    {listing.title}
                  </h4>
                  <p className="checkout__sidebar-recap-text">
                      {listing.listing_type[0].toUpperCase()}{listing.listing_type.slice(1)} in {listing.location}
                  </p>
                  <div className="checkout__sidebar-recap-review-wrapper">
                    <RenderStars />
                    <p className="checkout__sidebar-recap-review-nums">
                      {listing.num_reviews} reviews
                    </p>
                  </div>
                </div>
                <div className="checkout__sidebar-recap-photo-wrapper">
                    <div className="checkout__sidebar-recap-photo" style={{ backgroundImage: `url(${listing.thumbnailUrls[0]})`}}></div>
                </div>
              </div>

              <div className="checkout__sidebar-recap-guest-dates-wrapper">
                <div className="checkout__sidebar-recap-guest-outer">
                  <div className="checkout__sidebar-recap-guest-icon-wrapper">
                    <div className="checkout__sidebar-recap-guest-icon"></div>
                  </div>
                  <div className="checkout__sidebar-recap-guest-text">
                      {bookingParams.num_guests === 1 ? '1 guest' : `${bookingParams.num_guests} guests`}
                  </div> 
                </div>

                <div className="checkout__sidebar-recap-dates-outer">
                  <div className="checkout__sidebar-recap-dates-icon-wrapper">
                    <div className="checkout__sidebar-recap-dates-icon"></div>
                  </div>
                  <div className="checkout__sidebar-recap-dates-text">
                      <Moment format="LL">
                        {bookingParams.start_date}
                      </Moment> - 
                      <Moment format="LL">
                        {bookingParams.end_date}
                      </Moment>
                  </div> 
                </div>

                <div className="checkout__sidebar-fees-wrapper">
                  <div className="checkout__sidebar-fees-row">
                      <p className="checkout__sidebar-fees-content">
                        ${listing.price} x <Moment duration={bookingParams.start_date} date={bookingParams.end_date} />
                      </p>
                      <p className="checkout__sidebar-fees-price">
                        ${this.state.subtotal}
                      </p>
                  </div>
                  <div className="checkout__sidebar-fees-row">
                      <p className="checkout__sidebar-fees-content">Cleaning fee</p>
                      <p className="checkout__sidebar-fees-price">${this.state.cleaningFee}</p>
                  </div>
                  <div className="checkout__sidebar-fees-row">
                      <p className="checkout__sidebar-fees-content">Service fee</p>
                      <p className="checkout__sidebar-fees-price">${this.state.serviceFee}</p>
                  </div>
                  <div className="checkout__sidebar-fees-row">
                      <p className="checkout__sidebar-fees-content">Occupancy taxes and fees</p>
                      <p className="checkout__sidebar-fees-price">${this.state.taxRate}</p>
                  </div>
                  <div className="checkout__sidebar-fees-row">
                    <p className="checkout__sidebar-fees-content checkout__sidebar-fees-content--bold">Total(USD)</p>
                    <p className="checkout__sidebar-fees-price checkout__sidebar-fees-price--bold">
                      ${this.state.total}
                    </p>
                  </div>
                </div>

                <div className="checkout__sidebar-fees-total-wrapper">
                  <div className="checkout__sidebar-fees-row">
                    <p className="checkout__sidebar-fees-content--bold">
                      Due now
                    </p>
                    <p className="checkout__sidebar-fees-price--bold">
                      ${this.state.total}
                    </p>
                  </div>
                </div>

                <div className="checkout__sidebar-cancellation-wrapper">
                  <div className="checkout__sidebar-cancellation-content">
                    <h4 className="checkout__sidebar-cancellation-header">
                      Moderate - free cancellation
                    </h4>
                    <p className="checkout__sidebar-cancellation-text">
                      Cancel within 48 hours of booking to get a full refund.
                    </p>
                  </div>

                  <div className="checkout__sidebar-cancellation-icon-wrapper">
                    <div className="checkout__sidebar-cancellation-icon"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__footer-container">
          <ListingShowFooter />
        </div>


      </div>
    );
  }
}

export default Checkout;