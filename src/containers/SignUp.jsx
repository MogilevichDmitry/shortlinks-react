import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signUp } from '../actions/user';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    };

    this.signUpHandler = this.signUpHandler.bind(this);
  }

  changeValue(key) {
    return (e) => {
      const value = e.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  signUpHandler(e) {
    const { name, password } = this.state;
    const { nextPathname = '/' } = this.props.user;

    e.preventDefault();
    this.props.actions.signUp(name, password)
      .then(() => {
        this.setState({
          name: '',
          password: '',
        });
      })
      .then(() => {
        this.props.actions.push({ pathname: nextPathname });
      });
  }

  render() {

      const { name, password } = this.state;

      return (
      <form onSubmit={this.signUpHandler}>
        <h1>SignUp</h1>
        <div>
          <input
            type="text"
            placeholder="name"
            onChange={this.changeValue('name')}
            value={name}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={this.changeValue('password')}
            value={password}
          />
        </div>
        <button>Register</button>
      </form>
    );
  }
}

export default SignUp;

export default connect(state => ({
  user: state.user,
}), dispatch => ({
  actions: bindActionCreators({
    signUp,
    push,
  }, dispatch),
}))(SignUp);