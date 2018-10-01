import React, { Component } from 'react';


class Counter extends Component {
  state = {
    count : this.props.counterCount
  }

  render() {
    return (
      <div className="border border-warning rounded">
        <h1>{this.props.counterId}</h1>
        <div className={this.displayNumberDescription()}>{this.displayNumberDescription()}</div>
        <h1 className="big">{this.state.count}</h1>
        <button className="btn btn-primary btn-lg m-2" onClick={this.handleAdd}>+</button>
        <button className="btn btn-danger btn-lg m-2" onClick={this.handleMinus}>-</button>
      </div>
    );
  }

  displayNumberDescription = () => {
    if(this.state.count>0) {
      return 'Positive';
    } else if (this.state.count===0) {
      return 'Zero';
    } else {
      return 'Negative';
    }
  }
  determineNumberDescription = (value) => {
    let numberDesc = '';
    let newCount = this.state.count +value;
    if(newCount>0) {
      numberDesc= 'Positive';
    } else if (newCount===0) {
      numberDesc= 'Zero';
    } else {
      numberDesc= 'Negative';
    this.setState({count:newCount})
    
  }
}

  handleAdd = () => {
    
    this.setState(currentState => {
      return {count : currentState.count + 1}
    });  

    //this.determineNumberDescription(1);
    /*
    let newCount = this.state.count +1;
    this.setState({count: newCount}) */
  }

  handleMinus = () => {
    let newCount = this.state.count -1;
    this.setState({count: newCount})
    //this.determineNumberDescription(-1);
  }

  
}




export default Counter;
