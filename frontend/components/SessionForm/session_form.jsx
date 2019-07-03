import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    }
  }

  render() {

    // Errors
    let errors;
    if (this.props.errors) {
      errors = (
        <div>
          {this.props.errors.map((error, idx) => <p key={idx}>{error}</p>)}
        </div>
      );
    }

    // Sign up/Log in message
    let existingAccountMessage;
    if (this.props.formType === 'Log in') {
      existingAccountMessage = (
        <div>
          <p>Don't have an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      );
    } else {
      existingAccountMessage = (
        <div>
          <p>Already have an Airbnb account?</p>
          <Link to="/login">Log in</Link>
        </div>
      );
    }
    

    return (
      <div>
        <h2>{this.props.formType}</h2>
        <br/>
        {errors}
        <br/>
        <form onSubmit={this.handleSubmit} className="ui form">
          <label>Username:
            <input 
              type="text" 
              value={this.state.username} 
              onChange={this.handleInput('username')} />
          </label>
          <br/>
          <label>Password:
            <input 
              type="text" 
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <br /><br />
          <input 
            type="submit" 
            value={this.props.formType} 
            className="ui button basic" />
        </form>
        {existingAccountMessage}
      </div>
    );
  }
}

export default SessionForm;