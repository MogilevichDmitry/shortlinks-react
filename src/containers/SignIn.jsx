import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signIn } from '../actions/user';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    };

    this.signInHandler = this.signInHandler.bind(this);
  }

  changeValue(key) {
    return (e) => {
      const value = e.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  signInHandler(e) {
    const { name, password } = this.state;
    const { nextPathname = '/' } = this.props.user;

    e.preventDefault();
    this.props.actions.signIn(name, password)
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
      <form onSubmit={this.signInHandler}>
        <h1>SignIn</h1>
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
        <button>Войти</button>
      </form>
    );
  }
}

export default connect(state => ({
  user: state.user,
}), dispatch => ({
  actions: bindActionCreators({
    signIn,
    push,
  }, dispatch),
}))(SignIn);