import React, { Component } from 'react';
import './App.css';
import Square from './Square';
import SquareRow from "./SquareRow";


class App extends Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            vals: ['1','2','3','4','5','6','7','8','9'].sort(() => (Math.random() - 0.5))
        };

    }
    handleClick(current, newCurrent) {

        const arr = this.state.vals.slice();
        this.setState({vals: null});

        var temp = arr[current];
        arr[current] = arr[newCurrent];
        arr[newCurrent] = temp;
        this.state.vals = arr;
        this.setState({vals: arr});

    }


    render() {
    return (

        <div className="container">
            <br/>
        <div id={"root"} className="App-table">
            <div>
                <SquareRow cols = {this.state.vals.slice(0,3)} row={0} selectOn={this.handleClick} />
            </div>
            <div>
                <SquareRow cols = {this.state.vals.slice(3,6)} row ={1} selectOn={this.handleClick} />
            </div>
            <div>
                <SquareRow cols = {this.state.vals.slice(6,9)} row ={2} selectOn={this.handleClick} />
            </div></div>
        </div>
  );
  }
}

export default App;
