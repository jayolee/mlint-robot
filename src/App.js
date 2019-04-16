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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasknum: 1,
      mode: 0,

      page: 0,
      answerClass: ["","","",""],
      btnClass: "",
      robotFace: [robot_head_gr, robot_head_clr, robot_head_clr2, robot_head_clr3, robot_head_clr4],
      facenum: 0,
      headop : 1,
    }
  }

  selectAnswer(e) {
    let answer = e.target.getAttribute("href");
    let classList = this.state.answerClass;
    classList = ["","","",""];
    classList[answer] = "selected";
    this.setState({answerClass: classList, btnClass: "active", page: answer});
  }
  proceed(){
    this.setState({headop: 0.4});
    setTimeout(function () { this.setState({headop:1, mode: 1, facenum: (this.state.page) * 1 + 1}) }.bind(this), 150)
  }

  pageRender(){
    const Chart = require("react-chartjs").Doughnut;
    const chartOptions = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,
    
      //String - The colour of each segment stroke
      segmentStrokeColor : "#fff",
    
      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,
    
      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 50, // This is 0 for Pie charts
    
      //Number - Amount of animation steps
      animationSteps : 50,
    
      //String - Animation easing effect
      animationEasing : "easeOutSine",
    
      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,
    
      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,
    }
    const chartData = [
      {
        value: 100,
        color:"#C41E3A",
        highlight: "#E54C6E",
        label: "A"
      },
      {
        value: 50,
        color: "#FC6522",
        highlight: "#FF945E",
        label: "B"
      },
      {
        value: 200,
        color: "#FFCE00",
        highlight: "#FFDF57",
        label: "C"
      },
      {
        value: 80,
        color: "#EADB24",
        highlight: "#E7E36D",
        label: "D"
      }
    ]

    switch(this.state.mode){
      case 0:
      return  <div className = "question" style={{textAlign:"left"}}>
      <div className = "title">Task {this.state.tasknum}/10</div>
      <div className = "subtitle">Which feature visualization can represent “dog” the best?</div>
      <div className = "samples">
        <img src={chr1} key="0" href="0" className = {this.state.answerClass[0]} onClick={this.selectAnswer.bind(this)}/>
        <img src={chr2} key="1" href="1" className = {this.state.answerClass[1]} onClick={this.selectAnswer.bind(this)}/>
        <img src={chr3} key="2" href="2" className = {this.state.answerClass[2]} onClick={this.selectAnswer.bind(this)}/>
        <img src={chr4} key="3" href="3" className = {this.state.answerClass[3]} onClick={this.selectAnswer.bind(this)}/>
      </div>
      <div style= {{display:"flex", width:"512px", justifyContent:"flex-end"}}>
        <div className = {"btn " + this.state.btnClass} onClick={this.proceed.bind(this)}>Confirm</div>
      </div>
    </div>;
    case 1: return <div className = "question" style={{textAlign:"left"}}>
    <div className = "title">Task {this.state.tasknum}/10</div>
      <div className = "subtitle center">Other people answered...</div>
      <div className = "chart">
    <Chart data={chartData} options={chartOptions} width="250" height="250"/>
    </div>
    </div>
    }
  }
  render() {
    
    return (
      <div className="App" style={{width:"100%",height:"100%"}}>
        <div  className = "header" >
          <div className = "left">
            <div id="cmu">CMU</div>
            <div className = "title">Robot Game</div>
          </div>
          <div  className = "subtitle">Interpretable Machine Learning Research Project</div>
        </div>
          
        <div className = "mainContent">
          <div className = "robot_wrapper">
            <img id="head" key="head" style={{opacity: this.state.headop}} src={this.state.robotFace[this.state.facenum]} />
            <img id="body" src={robot_body}/>
          </div>
        {this.pageRender()}
        </div>
      </div>
    );
  }
}

export default App;
