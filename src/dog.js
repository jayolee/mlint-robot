import React, { Component } from 'react';
import logo from './logo.svg';
import Radar from './radarchart.js'
import Donut from './donutChart.js'
import dog_ent from './images/dog/entire.svg'
import dog_head from './images/dog/face.svg'
import dog_nohead from './images/dog/entirewithFace.svg'

import dogphoto from './images/dog/photo.png'

import chr1 from './images/dog/dog1.png'
import chr2 from './images/dog/dog2.png'
import chr3 from './images/dog/dog3.png'
import chr4 from './images/dog/dog4.png'
import './App.scss';

class DogRobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasknum: 2,
      mode: 0,

      page: 0,
      answerClass: ["", "", "", ""],
      btnClass: "",
      btnactive: false,

      // robotFace: [robot_head_gr, robot_head_clr, robot_head_clr2, robot_head_clr3, robot_head_clr4],
      facenum: 0,
      quesop: 1,
    }
  }

  selectAnswer(e) {
    let answer = e.target.getAttribute("href");
    let classList = this.state.answerClass;
    classList = ["", "", "", ""];
    classList[answer] = "selected";
    this.setState({ answerClass: classList, btnClass: "active", page: answer, btnactive: true, });
  }
  submitAnswer(){
    let classList = ["", "", "", ""];
    if (this.state.btnactive === true) {
      setTimeout(function () { this.setState({btnactive: false, tasknum: (this.state.tasknum * 1 )+ 1, btnClass: " ", answerClass: classList}) }.bind(this), 300)
    }
  }
  proceedMode(n) {
      this.setState({ quesop: 0});
      setTimeout(function () { this.setState({ quesop: 1, mode: n}) }.bind(this), 300)
  }
  
  pageRender() {
    switch (this.state.mode) {
      case 0:
            return <div className="question dog" key="dogQuestion" style={{ opacity:this.state.quesop, textAlign: "left" }}>
              <div className="title" >Task {this.state.tasknum}/10</div>
              <div className="subtitle" style={{width:"100%",textAlign:"center"}}>Tim tries to create a dog robot for her daughter. </div>
                  <div className="dog_wrapper">
                    <img id="parts" key="head" style={{ opacity: this.state.headop }} src={dog_ent} />
              </div>

              <div className = "dog_sample">
                <div id="dogphoto" >
                  <img src={dogphoto} />
                </div>
                <div className = "sample_question">
                He’s trying to create a head part based on the photo on the left.<br />
Which feature visualization can help creating the dog face?
                  <div className="samples">
                    <img src={chr1} key="0" href="0" className={this.state.answerClass[0]} onClick={this.selectAnswer.bind(this)} />
                    <img src={chr2} key="1" href="1" className={this.state.answerClass[1]} onClick={this.selectAnswer.bind(this)} />
                    <img src={chr3} key="2" href="2" className={this.state.answerClass[2]} onClick={this.selectAnswer.bind(this)} />
                    <img src={chr4} key="3" href="3" className={this.state.answerClass[3]} onClick={this.selectAnswer.bind(this)} />
                  </div>
              </div>
              </div>
              <div style={{ display: "flex", width: "800px", margin:"0 auto", justifyContent: "flex-end" }}>
                <div className={"btn " + this.state.btnClass} onClick={(ev) => {this.proceedMode(1); this.submitAnswer()}}>Submit</div>
              </div>
            </div>;
      case 1: setTimeout(function () {this.proceedMode(2)}.bind(this), 2500);
      return <div className="question" key="dogQuestion" style={{ opacity:this.state.quesop, textAlign: "left" }}>
          <div style={{margin: "30px auto", display: "block", maxWidth: "200px"}} >
                  <img src={dog_head} />
                </div>
        <div className="subtitle center">Nice work! Tim created a dog head.</div>
      </div>;

      case 2: return <div className="question dog" key="dogQuestion" style={{ opacity:this.state.quesop, textAlign: "left" }}>
      <div className="title" >Task {this.state.tasknum}/10</div>
      <div className="subtitle" style={{width:"100%",textAlign:"center"}}>Alex tries to create a dog robot for the daughter. </div>
          <div className="dog_wrapper">
            <img id="parts" key="head" style={{ opacity: this.state.headop }} src={dog_nohead} />
      </div>

      <div className = "dog_sample">
        <div id="dogphoto" >
          <img src={dogphoto} />
        </div>
        <div className = "sample_question">
        Tim’s trying to create a head part based on the photo on the left.<br />
Which feature visualization can help creating the dog head?
          <div className="samples">
            <img src={chr1} key="0" href="0" className={this.state.answerClass[0]} onClick={this.selectAnswer.bind(this)} />
            <img src={chr2} key="1" href="1" className={this.state.answerClass[1]} onClick={this.selectAnswer.bind(this)} />
            <img src={chr3} key="2" href="2" className={this.state.answerClass[2]} onClick={this.selectAnswer.bind(this)} />
            <img src={chr4} key="3" href="3" className={this.state.answerClass[3]} onClick={this.selectAnswer.bind(this)} />
          </div>
      </div>
      </div>
      <div style={{ display: "flex", width: "800px", margin:"0 auto", justifyContent: "flex-end" }}>
        <div className={"btn " + this.state.btnClass} onClick={(ev) => {}}>Submit</div>
      </div>
    </div>;
    }
  }
  render() {
    return (
      <div className="mainContent">
      
      {this.pageRender()}
        </div>
    );
  }
}

export default DogRobot;
