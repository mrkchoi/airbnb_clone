import React from 'react'
import RenderStars from '../../stars/render_stars';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);
// ThemedStyleSheet.registerTheme({
//   reactDates: {
//     ...DefaultTheme.reactDates,
//     color: {
//       ...DefaultTheme.reactDates.color,
//       highlighted: {
//         // backgroundColor: '#82E0AA',
//         backgroundColor_active: '#914669',
//         backgroundColor_hover: '#914669',
//         color: '#914669',
//         color_active: '#914669',
//         color_hover: '#914669',
//       },
//     },
//   },
// });

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      numGuests: 1,
      loading: false,
      redirect: false 
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleSumbit(e) {
    e.preventDefault();

    // clearBooking Errors
    // If not logged in, scroll to top & oepen login modal
    // Pass bookingParams from state in correct shape to slice of redux state for booking action
    // Redirect to booking confirmation page and pull booking info from redux state
    // On submit, send bookingParams to createBooking action to push to DB
    // Then, redirect user to trips/profile page
    
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    let { listing } = this.props;

    if (!this.props.listing) {
      return null;
    }

    // Calculate max number of guests for select/option dropdown
    let numMaxGuests = listing.num_guests;
    let numGuestsArr = [];
    for (let i = 1; i <= numMaxGuests; i++) {
      numGuestsArr.push(i);
    }
    
    let numGuestsInput = (
      <select className="bookingmodal__form-guest-input">
        {numGuestsArr.map((num, idx) => <option value={num} key={idx}>{num}</option> )}
      </select>
    );

  

    return (
      <div className="bookingmodal__container">
        <a
          href="#"
          className="bookingmodal__btn-close modal__btn-close"
          onClick={this.handleClick} >
          <i className="fas fa-times"></i>
        </a>
        <div className="bookingmodal__pricingreviews">
          <h4 className="bookingmodal__pricing-header">
            ${listing.price} / night
          </h4>
          <div className="bookingmodal__reviews">
            {RenderStars(listing.average_rating)}
            <div className="bookingmodal__reviews-count">
              {listing.num_reviews}
            </div>
          </div>
        </div>
        
        <div className="bookingmodal__form-container">
          <form className="bookingmodal__form">
            <div className="bookingmodal__form-dates-container">
              <h5 className="bookingmodal__form-dates-header bookingmodal__form-label">
                Dates
              </h5>
              <div className="bookingmodal__form-calendar">
                <DateRangePicker
                  startDatePlaceholderText="Check In"
                  endDatePlaceholderText="Check Out"
                  startDateId="booking-form-startDate"
                  endDateId="booking-form-endDate"
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate: startDate, endDate: endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                  // isDayBlocked={date => this.isAlreadyBooked(date)}
                  showClearDates={true}
                  regular={true}
                  numberOfMonths={1}
                />

              </div>

            </div>

            <div className="bookingmodal__form-guests-container">
              <h5 className="bookingmodal__form-label bookingmodal__form-guests-header">Guests</h5>
              {/* <input 
                type="number"
                className="bookingmodal__form-guest-input"
                defaultValue="1"
                min="1"
                max={listing.num_guests} /> */}

              {numGuestsInput}
            </div>
            
            <div className="bookingmodal__form-cta-container">
              <input type="submit" className="bookingmodal__form-btn" value="Request to Book" />
              <p className="bookingmodal__form-cta-text">You won't be charged yet</p>
            </div>
          </form>
        </div>



      </div>
    )
  }
}

export default BookingForm;