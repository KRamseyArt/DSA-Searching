import React, { Component } from 'react'

import './App.css';

export class App extends Component {
  state = {
    data: [
      89, 30, 25, 32, 72,
      70, 51, 42, 25, 24,
      53, 55, 78, 50, 13,
      40, 48, 32, 26, 2,
      14, 33, 45, 72, 56,
      44, 21, 88, 27, 68,
      15, 62, 93, 98, 73,
      28, 16, 46, 87, 28,
      65, 38, 67, 16, 85,
      63, 23, 69, 64, 91,
      9, 70, 81, 27, 97, 
      82, 6, 88, 3, 7,
      46, 13, 11, 64, 76,
      31, 26, 38, 28, 13,
      17, 69, 90, 1, 6,
      7, 64, 43, 9, 73,
      80, 98, 46, 27, 22,
      87, 49, 83, 6, 39,
      42, 51, 54, 84, 34,
      53, 78, 40, 14, 5,
    ],
    result: null
  } 

  linearSearch = (array, value) =>{
    for (let i = 0; i < array.length; i++){
      if (array[i] == value){
        return (
          <section className="result">
            <h3 className="searchTitle">LINEAR SEARCH:</h3>
            <p>"{value}" <span className="success">FOUND</span><br/><span className="count">{i + 1} attempts</span></p>
          </section>
        )
      }
    }
    return (
      <section className="result">
        <h3 className="searchTitle">LINEAR SEARCH:</h3>
        <p>"{value}" <span className="fail">NOT FOUND</span><br/><span className="count">{array.length} attempts</span></p>
      </section>
    )
  }

  binarySearch = (array, value, start, end, count=0) => {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end){
      return (
        <section className="result">
          <h3 className="searchTitle">BINARY SEARCH:</h3>
          <p>"{value}" <span className="fail">NOT FOUND</span><br/><span className="count">{count} attempts</span></p>
        </section>
      )
    }

    count++;

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value){
      return (
        <section className="result">
          <h3 className="searchTitle">LINEAR SEARCH:</h3>
          <p>"{value}" <span className="success">FOUND</span><br/><span className="count">{count} attempts</span></p>
        </section>
      )
    } else if (item < value){
      return this.binarySearch(array, value, index+1, end, count);
    } else if (item > value){
      return this.binarySearch(array, value, start, index-1, count);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let searchVal = e.target.findValue.value;

    this.setState({
      result: [
        this.linearSearch(this.state.data, searchVal),
        this.binarySearch(this.state.data.sort((a,b) => a-b), searchVal)
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <form onSubmit = {this.handleSubmit}>
          <label
            htmlFor="findValue"
          >
            Find:
          </label>
          <input
            type="number"
            id="findValue"
            name="findValue"
          />
          <input
            type="submit"
            value="Search!"
          />
        </form>
      <p>{this.state.result}</p>
      </div>
    )
  }
}

export default App
