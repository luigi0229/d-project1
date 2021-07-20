import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {SocketContext, socket} from './socket';

// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:8080";
// const socket = socketIOClient(ENDPOINT, { transports : ['websocket'] });

const dummyData = [
  { title: '0', value: 1, color: '#924F55' },
  { title: '0', value: 1, color: '#4F5992' }
];

// let dummyDataRed = [
//   { title: '0', value: 1, color: '#924F55' },
//   { title: '', value: 0, color: '#4F5992' }
// ];
//
// let dummyDataBlue = [
//   { title: '', value: 0, color: '#924F55' },
//   { title: '0', value: 1, color: '#4F5992' }
// ];

class Results extends React.Component {

  state = {data: [], loading: true, dummyDataFlag: false}

  componentDidMount() {
    console.log("mounted")

    socket.emit("fetch");

    socket.on("update", data => {
      // console.log("data", data)
      console.log("got results",data)
      this.setState({data: data, loading: false})
      if(data[0].value == 0 && data[1].value == 0){
        console.log("in if")
        this.setState({data: dummyData, loading: false, dummyDataFlag: true})
      } else {
       this.setState({data: data, loading: false, dummyDataFlag: false})
     }
    });


  }

  render() {
    return (
      <div style={{ display: 'flex', backgroundColor:'#f8f8ff',  justifyContent:'center', alignItems:'center'}}>
        {this.state.loading ?
          <h1>Loading</h1>
        :
        <div style={{justifyContent:'center', alignItems:'center', height:'70%', width:'70%'}}>
          <h2 style={{textAlign:'center'}}>Results</h2>
          <PieChart
            segmentsShift={.5}
            radius = {35}
            label={({ dataEntry }) =>
              this.state.dummyDataFlag ? dataEntry.title
              :
              dataEntry.value == 0 ? '' : dataEntry.value
            }
            labelStyle = {{fontSize:'10px', fill:'white', fontWeight:'700'}}
            data={this.state.data}
          />
          <div style={{display: 'flex',  justifyContent:'center'}}>
          <a href="http://localhost:80">
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
            <text style={{color:'white', fontWeight:'700', fontSize:'2vh'}}>Vote</text>
          </button>
          </a>
          </div>

        </div>
        }




      </div>
    );
  }
};

export default Results;
