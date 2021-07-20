import React from 'react';
// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8080";
// const socket = socketIOClient(ENDPOINT,{ transports : ['websocket'] });
import {SocketContext, socket} from './socket';
class Main extends React.Component {

  vote(color) {
    socket.emit("vote", {value:color});
  }

  render() {
    // <h2>Vote</h2>
    // <div style={{justifyContent:'center', backgroundColor:'red', alignItems:'center', height:'70%', width:'70%'}}>
    //   <button onClick={() => this.vote('Red')}>
    //     Vote Red
    //   </button>
    //   <button onClick={() => this.vote('Blue')}>
    //     Vote Blue
    //   </button>
    // </div>

    return (

      <div style={{backgroundColor:'#f8f8ff',display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <div style={{ height:'90vh', width:'90vh'}}>
            <h2 style={{textAlign:'center'}}>Vote</h2>
              <div style={{display: 'flex',  justifyContent:'center'}}>
              <button
              style={{
                backgroundColor:'#924F55',
                width:'20vh',
                height:'10vh',
                borderRadius:10,
                borderWidth:1,
                borderColor:'grey',
                fontColor:'white',
                marginRight:10,
                }}
                onClick={() => this.vote('Red')}>
                <text style={{color:'white', fontWeight:'500', fontSize:'4vh'}}>Red</text>
              </button>
              <button
              style={{
                backgroundColor:'#4F5992',
                width:'20vh',
                height:'10vh',
                borderRadius:10,
                borderWidth:1,
                borderColor:'grey',
                fontColor:'white',
                marginLeft:10,
                }}
                onClick={() => this.vote('Blue')}>
                <text style={{color:'white', fontWeight:'500', fontSize:'4vh'}}>Blue</text>
              </button>
              </div>
              <div style={{display: 'flex',  justifyContent:'center'}}>
              <a href="http://localhost:3000/results">
              <button
              style={{
                backgroundColor:'black',
                width:'15vh',
                height:'6vh',
                borderRadius:6,
                borderWidth:1,
                borderColor:'grey',
                fontColor:'white',
                marginTop:30,
                }}
                >
                <text style={{color:'white', fontWeight:'700', fontSize:'2vh'}}>See Results</text>
              </button>
              </a>
              </div>

        </div>

      </div>
    );
  }
};

export default Main;
