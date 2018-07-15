import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <li className='myList'>
          {this.props.list}
        </li>  
    )
  }
}
