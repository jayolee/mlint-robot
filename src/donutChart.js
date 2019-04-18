import React, { Component } from 'react';
import './App.scss';

class Donut extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const Chart = require("react-chartjs").Doughnut;
  const chartOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,

    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth: 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps: 50,

    //String - Animation easing effect
    animationEasing: "easeOutSine",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
  }
  const chartData = [
    {
      value: this.props.data[0],
      color: "#C41E3A",
      highlight: "#E54C6E",
      label: "A"
    },
    {
      value: this.props.data[1],
      color: "#FC6522",
      highlight: "#FF945E",
      label: "B"
    },
    {
      value: this.props.data[2],
      color: "#FFCE00",
      highlight: "#FFDF57",
      label: "C"
    },
    {
      value: this.props.data[3],
      color: "#EADB24",
      highlight: "#E7E36D",
      label: "D"
    }
  ]

    const RadarChart = require("react-chartjs").Radar; 
    const config = this.props.config;
    return (
        <Chart data={chartData} options={chartOptions} width="250" height="250" />
    );
  }
}

export default Donut;
