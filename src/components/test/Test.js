import React, { Component } from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };

  componentDidMount () {
    console.log('componentDidMount...');
  }

  componentWillMount () {
    console.log('componentWillMount...');
  }

  componentDidUpdate () {
    console.log('componentDidUpdate...');
  }

  componentWillUpdate () {
    console.log('componentWillUpdate...');
  }

  componentWillRecieveProps (nextProps, nextState) {
    console.log('componentWillRecieveProps...');
  }

  static getDerivedStateFromProps (nextProps, prevstate) {
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate (prevtProps, prevState) {
    console.log('getSnapshotBeforeUpdate...')
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }

}

export default Test;
