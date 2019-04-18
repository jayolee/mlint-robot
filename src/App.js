import React, { Component } from 'react';
import Radar from './radarchart.js'
import robot_head_gr from './images/robot/face1.svg'
import robot_head_clr from './images/robot/face_clr.svg'
import robot_head_clr2 from './images/robot/face_clr2.svg'
import robot_head_clr3 from './images/robot/face_clr3.svg'
import robot_head_clr4 from './images/robot/face_clr4.svg'

import Robot from './robot.js'
import DogRobot from './dog.js'

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasknum: 1,
      mode: 0,

      page: 0,
      answerClass: ["", "", "", ""],
      btnClass: "",
      btnactive: false,

      robotFace: [robot_head_gr, robot_head_clr, robot_head_clr2, robot_head_clr3, robot_head_clr4],
      facenum: 0,
      headop: 1,
    }
  }

  modeChange(n){
    this.setState({mode: n});
  }
  selectAnswer(e) {
    let answer = e.target.getAttribute("href");
    let classList = this.state.answerClass;
    classList = ["", "", "", ""];
    classList[answer] = "selected";
    this.setState({ answerClass: classList, btnClass: "active", page: answer, btnactive: true, });
  }
  proceed() {
    if (this.state.btnactive === true) {
      this.setState({ headop: 0.4 });
      setTimeout(function () { this.setState({ headop: 1, mode: 1, facenum: (this.state.page) * 1 + 1 }) }.bind(this), 150)
    }
  }
  mainContentRender() {
    const config_robot = {
      type: "radar",
    data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        fillColor: "rgba(196, 30, 58, 0.3)",
        strokeColor: "rgba(196, 30, 58, 1)",
        pointColor: "rgba(196, 30, 58, 1)",
        pointBackgroundColor: "rgba(196, 30, 58, 0.1)",
        label: "",
        data: [20, 10, 4, 6, 14]
      },
      {
        fillColor: "rgba(98, 185, 186, 0.3)",
        strokeColor: "rgba(98, 185, 186, 1)",
        pointColor: "rgba(98, 185, 186, 1)",
        pointBackgroundColor: "rgba(98, 185, 186, 0.1)",
        label: "",
        data: [10, 16, 14, 16, 12]
      }]
    },
    options:{
      scale: {
        ticks: {
          beginAtZero: true
        }
      }

    }}; 
    const config_human = {
      type: "radar",
    data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        fillColor: "rgba(196, 30, 58, 0.3)",
        strokeColor: "rgba(196, 30, 58, 1)",
        pointColor: "rgba(196, 30, 58, 1)",
        pointBackgroundColor: "rgba(196, 30, 58, 0.1)",
        label: "",
        data: [20, 10, 4, 6, 14]
      },
      {
        fillColor: "rgba(234, 219, 36, 0.3)",
        strokeColor: "rgba(234, 219, 36, 1)",
        pointColor: "rgba(234, 219, 36, 1)",
        pointBackgroundColor: "rgba(234, 219, 36, 0.1)",
        label: "",
        data: [16, 5, 14, 18, 7]
      }]
    },
    options:{
      scale: {
        ticks: {
          beginAtZero: true
        }
      }

    }}; 
    
    switch (this.state.mode) {
      case 3:
        return  <div className="mainContent">
          <div className="chartPage">
            <div className = "chartwrap">
              <div className = "title">You’re 73% Robot</div>
              <Radar config = {config_robot}/>
            </div>
            <div className = "chartwrap">
              <div className = "title">You’re 58% Representative for human</div>
              <Radar config = {config_human}/>
            </div>
          
           <div style={{ display: "flex", width: "100%", marginTop: "60px",             justifyContent: "center"}}>
            <div className={"btn active"} onClick={(ev) => this.setState({ mode: 0, tasknum: 2 })}>Next Task</div>
          </div>
          </div>
        </div>
      default: 
        switch(this.state.tasknum){
          case 1: return <Robot modeChange = {this.modeChange.bind(this)}/>
          case 2: return <DogRobot />
        }
    }
  }
  render() {

    return (
      <div className="App" style={{ width: "100%", height: "100%" }}>
        <div className="header" >
          <div className="left">
            <div id="cmu">CMU</div>
            <div className="title">Robot Game</div>
          </div>
          <div className="subtitle">Interpretable Machine Learning Research Project</div>
        </div>
        {this.mainContentRender()}

      </div>
    );
  }
}

export default App;
