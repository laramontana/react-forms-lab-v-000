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
    let userPoem = this.state.poem.split("\n")
    console.log(userPoem)
    if (userPoem.length > 2 && userPoem[0].length === 5 && userPoem[1].length === 3 && userPoem[2].length === 5) {
      this.setState({
        isValid: true
      })
    } else {
      this.setState({
        isValid: false
      })
    }
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
        { !this.state.isValid ?
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!

          </div>
          : ""
        }


      </div>
    );
  }
}

export default PoemWriter;
