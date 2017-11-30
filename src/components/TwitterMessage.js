import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      message: e.target.value
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleInput}/>
        <p>{140-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
