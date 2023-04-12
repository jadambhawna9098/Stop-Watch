import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {time: 0,
      runtime: false
    };
    this.interval = null;
  }

  handleStart = ()=>{
    if (this.state.runtime) return;
    this.setState({ runtime: true });
    this.interval = setInterval(() => {
      this.setState(prevState => ({ time: prevState.time + 1 }));
    }, 10);
  }

  
  handleStop = ()=>{
    if (!this.state.runtime) return;
    clearInterval(this.interval);
    this.setState({ runtime: false });
  }

  
  handleReset = ()=>{
    clearInterval(this.interval);
    this.setState({ time: 0, runtime: false });
  }

  render() {
    const { time } = this.state;
    const miliseconds = time % 60;
    const seconds = Math.floor(time / 60);
    const minutes = Math.floor(seconds / 60);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-danger text-white">
            <h3>StapWatch App</h3>
          </div>
        </div>
        <div>
          <h2 className='ml-5 mt-4'>
            {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds.toString().padStart(2, '0')}`}
           </h2>

          <div>
            <button  className="btn btn-success ml-5" onClick={this.handleStart}>Start</button>
            <button className="btn btn-danger ml-5" onClick={this.handleStop}>Stop</button>
            <button className="btn btn-primary ml-5" onClick={this.handleReset}> Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
