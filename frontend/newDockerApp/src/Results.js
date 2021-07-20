import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:8080";
const socket = socketIOClient(ENDPOINT, { transports : ['websocket'] });

class Results extends React.Component {

  state = {data: [], loading: true}

  componentDidMount() {
    console.log("mounted")

    socket.emit("fetch");

    socket.on("update", data => {
      // console.log("data", data)
      console.log("got results")
      this.setState({data: data, loading: false})
    });

    // socket.emit("vote", {value:'Red'});

  }

  // vote(color) {
  //   // const requestOptions = {
  //   // method: 'POST',
  //   // headers: { 'Content-Type': 'application/json' },
  //   // body: JSON.stringify({ color: 'Red' })
  //   // };
  //   // let color = "red";
  //   // const encodedValue = encodeURIComponent(color);
  //   fetch(`http://localhost:8080/vote?color=${color}`, {
  //     mode: 'no-cors',
  //     method: "GET",
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //     .then(console.log("sent request"))
  // }

  render() {
    // console.log("state", this.state)
    // const { data } = this.state
    // console.log("data", data)
    return (
      <div>
        <h1>Results</h1>
        {this.state.loading ?
          <h1>Loading</h1>
        :
        <div style={{justifyContent:'center', alignItems:'center', height:'70%', width:'70%'}}>
          <PieChart
            segmentsShift={.5}
            radius = {40}
            label = {()=>{return "hi"}}
            labelStyle = {{fontSize:'5px'}}
            data={this.state.data}
          />;
        </div>
        }



      </div>
    );
  }
};

export default Results;
