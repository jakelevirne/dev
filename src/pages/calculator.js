import React from 'react';
import Layout from '@theme/Layout';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }  
}

class Hello extends React.Component {
  render() {
    return (
      <Layout title="Clock">
      <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '20px',
      }}>
      <p>
      This is a thing that calculates things. Super cool. No SUPER cool!!!
      <Clock />
      </p>
      </div>
      </Layout>
    )
  }
}

export default Hello;