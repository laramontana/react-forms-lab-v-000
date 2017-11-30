import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      poem: e.target.value
    })
  }

  let userPoem = this.state.value.split("\n");
  if userPoem[0].length === 3 && userPoem[1].length === 5 && userPoem[2].length === 3 {
    this.setState({
      isValid: true
    })
  }


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleInput}
        />
        <div if this.isValid {
          id="poem-validation-error"
          style={{color: 'red'}}
        }
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
