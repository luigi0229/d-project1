import React from 'react';
// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8080";
// const socket = socketIOClient(ENDPOINT, { transports : ['websocket'] });
import {SocketContext, socket} from './socket';
class Main extends React.Component {

  vote(color) {
    socket.emit("vote", {value:color});
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
