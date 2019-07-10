import React from 'react'
import RenderStars from '../../stars/render_stars';
import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);

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
  }

  render() {
    let { listing } = this.props;

    if (!this.props.listing) {
      return null;
    }

    return (
      <div>
        {listing.price}
        {RenderStars(listing.average_rating)}
        {listing.num_reviews}
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
        />
      </div>
    )
  }
}

export default BookingForm;