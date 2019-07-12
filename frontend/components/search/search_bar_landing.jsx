import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBarLanding extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      query: ""
    };
    
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const searchInput = document.querySelector(".landing__search-input");
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

    document.querySelector('body').classList.add('landing__page');
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

    if (this.props.currentUser) {
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
    } else {
      this.props.openModal('login');
    }
  }

  render() {
    return (
      <div className=" landing__search-container">
        <form className="landing__search-form" onSubmit={this.handleSubmit}>
          <p className="landing__search-form-label">
            Where
          </p>
          <div className="landing__search-form-inner">
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleInput}
              className="landing__search-input"
              placeholder={`Try "San Francisco"`}
            />
            <input
              type="submit"
              value="Search"
              className="landing__search-btn-submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBarLanding);