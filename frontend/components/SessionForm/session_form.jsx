import React from 'react';

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
    this.props.processForm(this.state)
      .then(this.props.history.push('/'));
  }

  handleInput(type) {
    return e => {
      this.setState({
        [type]: e.target.value
      });
    }
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = (
        <div>
          {this.props.errors.map(error => <p>{error}</p>)}
        </div>
      );
    }

    return (
      <div>
        <h2>{this.props.formType}</h2>
        <br/>
        {errors}
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
      </div>
    );
  }
}

export default SessionForm;