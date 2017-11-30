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
        <p>{this.state.message.substr(0, this.props.maxChars)}</p>
      </div>
    );
  }
}

export default TwitterMessage;
