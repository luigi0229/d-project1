import React from 'react';

class Main extends React.Component {

  vote(color) {
    // const requestOptions = {
    // method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify({ color: 'Red' })
    // };
    // let color = "red";
    // const encodedValue = encodeURIComponent(color);
    fetch(`http://localhost:8080/vote?color=${color}`, {
      mode: 'no-cors',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(console.log("sent request"))
  }

  render() {
    return (
      <div>
        <h1>hi11</h1>

        <button onClick={() => this.vote('Red')}>
          Vote Red
        </button>
        <button onClick={() => this.vote('Blue')}>
          Vote Blue
        </button>

      </div>
    );
  }
};

export default Main;
