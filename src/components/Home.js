import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {    
  handleSubmit = (e) =>{
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic  = this.topic.value;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  }
  render() {
    return (
      <div className="main-content home">
        <h2>Michael testing area</h2>
        <p>Generate PDF </p>
       <hr />
      

      </div>
    );
  }
}

export default Home;