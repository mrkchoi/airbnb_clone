import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      query: ""
    };
    
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const searchInput = document.querySelector(".header__search-input");
    const autocomplete = new google.maps.places.Autocomplete(searchInput);
    google.maps.event.addDomListener(window, "load", autocomplete);
    let address;
    autocomplete.addListener("place_changed", () => {
      if (!autocomplete.getPlace().formatted_address) {
        address = autocomplete.getPlace().name;
        this.setState({ query: address });
        this.handleSubmit();
      } else {
        address = autocomplete.getPlace().formatted_address;
        this.setState({ query: address });
        this.handleSubmit();
      }
    });
  }

  componentWillUnmount() {

  }

  handleInput(e) {
    this.setState({
      query: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.state.query }, (res, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = res[0].geometry.location.lat();
        const lng = res[0].geometry.location.lng();
        this.props.history.push(`/listings?lat=${lat}&lng=${lng}`);
        
        this.props.updateSearchCoords(lat, lng);
      } else {
        this.props.history.push(`/listings?lat=37.7749&lng=122.4194`);
      }
    });
  }

  render() {
    return (
      <div className="header__search-container-inner">
        <div className="header__search-icon-container" />
        <form className="header__search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleInput}
            className="header__search-input"
            placeholder={`Try "San Francisco"`}
          />
          <input
            type="submit"
            value="Search"
            className="header__search-btn-submit"
          />
        </form>
        <div className="header__search-close-container">
          <i className="fas fa-times" />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);