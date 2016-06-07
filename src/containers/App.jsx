import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { logout } from '../actions/user';

class App extends Component {

  constructor(props) {
    super(props)

    this.logoutHandler = this.logoutHandler.bind(this);
  }
  logoutHandler() {
    this.props.actions.logout();
    this.props.actions.push('/signup');
  }


  render() {
    return (
      <div>
        <div>
          <button onClick={ this.logoutHandler }>Logout</button>
        </div>
        <h1>Default React Project</h1>
        { this.props.children }
      </div>
    );
  }
}

export default App;
export default connect(state => ({

}), dispatch => ({
  actions: bindActionCreators({
    logout,
    push,
  }, dispatch),
}))(App);