import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleInput() {
    return e => {
      this.setState({
        query: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div className="header__search-container-inner">
        <div className="header__search-icon-container" />
        <form className="header__search-form">
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleInput}
            className="header__search-input"
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

export default SearchBar;