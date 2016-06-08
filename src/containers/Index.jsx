import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createShortlink, addLinkInfo } from '../actions/link';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      initialLink: '',
      tags: '',
      description: ''
    };

    this.linkHandler = this.linkHandler.bind(this);
  }

  changeValue(key) {
    return (e) => {
      const value = e.target.value;
      this.setState({
        [key]: value,
      });
    };
  }

  linkHandler(e) {
    const { initialLink, tags, description } = this.state;

    e.preventDefault();
    this.props.actions.createShortlink(initialLink, tags, description)
      .then((action) => {
        this.setState({
          initialLink: '',
          tags: '',
          description: ''
        });

        this.props.actions.addLinkInfo(action.payload.link);
      });
  }

  render() {
    const { initialLink, tags, description  } = this.state;
    const link = this.props.link;

    return <div>
      <h1>Index</h1>
      <div>
        <p>Create shortlink</p>
        <form onSubmit={this.linkHandler}>
          <input
            type="text"
            ref="initialLink"
            placeholder="leave here link"
            onChange={this.changeValue('initialLink')}
            value={initialLink}
          />
          <input
            type="text"
            ref="tags"
            placeholder="leave here tags"
            onChange={this.changeValue('tags')}
            value={tags}
          />
          <input
            type="text"
            ref="linkDescription"
            placeholder="leave here descriptions"
            onChange={this.changeValue('description')}
            value={description}
          />
          <button>Generate</button>
        </form>
        {
          link.shortLink ?
            <a href={`http://localhost:3000/ref/${link.shortLink}`}>
              http://localhost:3000/ref/{link.shortLink}
            </a> : ''
        }
      </div>
    </div>;
  }
}

export default Index;

export default connect(state => ({
  link: state.link
}), dispatch => ({
  actions: bindActionCreators({
    createShortlink,
    addLinkInfo,
  }, dispatch),
}))(Index);