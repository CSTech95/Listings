import React, { Component } from 'react'

export default class Input extends Component {

    tester(e) {
      e.preventDefault();
      let input = document.getElementById('takeMe');
      let k = input.value;
      this.props.handleChange(k);
        // console.log(k);
    }

    render() {
    return (
      <form className='myForm' onSubmit={this.tester.bind(this)}>
        <input id='takeMe' type='text' />
        <input type='submit' />
      </form>
    )
  }
}
