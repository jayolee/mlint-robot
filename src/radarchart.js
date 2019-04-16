import React, { Component } from 'react';
import logo from './logo.svg';
import robot_head_gr from './images/robot/face1.svg'
import robot_head_clr from './images/robot/face_clr.svg'
import robot_head_clr2 from './images/robot/face_clr2.svg'
import robot_head_clr3 from './images/robot/face_clr3.svg'
import robot_head_clr4 from './images/robot/face_clr4.svg'
import robot_body from './images/robot/body.svg'

import chr1 from './images/feature1.png'
import chr2 from './images/feature2.png'
import chr3 from './images/feature3.png'
import chr4 from './images/feature4.png'
import './App.scss';

class Radar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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
  render() {
    const RadarChart = require("react-chartjs").Radar; 
    const config = this.props.config;
    return (
      <div>
          <div className="question" style={{ textAlign: "left" }}>
          <RadarChart id="myChart" data={config.data} options={config.options} width="300" height="300" />
         
          </div>
        </div>
    );
  }
}

export default Radar;
