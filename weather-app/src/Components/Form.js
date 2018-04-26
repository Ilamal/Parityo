import React, { Component } from 'react';

export default class Title extends Component {

  render() {
    return (
        <form onSubmit={this.props.callApi}>
            <input type="text" name="city" placeholder="City"/>
            <button>
              Find out the weather!
            </button>
        </form>
    );
  }
}
