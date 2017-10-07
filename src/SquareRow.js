import React, { Component } from 'react';
import Square from './Square';
class SquareRow extends Component {
    constructor(props){
        super();

        this.state = {
            cols: props.cols,
            row: props.row,
            selectOn: props.selectOn
        };
        this.handleRowClick = this.handleRowClick.bind(this);

    }
    handleRowClick(cell,action) {
        console.log(action);
        if (action === 'U') {
            if (this.state.row === 0)
                return;

            var current = (this.state.row * 3) + cell;
            var newCurrent = ((this.state.row - 1) * 3) + cell;
            this.state.selectOn(current, newCurrent);
            this.setState({cols:this.props.cols});
            console.log(this.props.cols);
        }

        if (action === 'D') {
            if (this.state.row === 2)
                return;

            var current = (this.state.row * 3) + cell;
            var newCurrent = ((this.state.row + 1) * 3) + cell;
            this.state.selectOn(current, newCurrent);
            this.setState({cols:this.props.cols});
            console.log(this.props.cols);
        }

        if (action === 'L') {
            if (cell == 0)
                return;

            var current = (this.state.row * 3) + cell;
            var newCurrent = ((this.state.row ) * 3) + cell-1;
            this.state.selectOn(current, newCurrent);
            this.setState({cols:this.props.cols});
            console.log(this.props.cols);
        }

        if (action === 'R') {
            if (cell== 2)
                return;

            var current = (this.state.row * 3) + cell;
            var newCurrent = ((this.state.row ) * 3) + cell+1;
            this.state.selectOn(current, newCurrent);
            this.setState({cols:this.props.cols});
            console.log(this.props.cols);
        }


    }


    render() {
        return (

            <div>
                <div>
                    <Square index={0} label = {this.props.cols[0]} rowClicked = {this.handleRowClick} />
                    <Square index={1} label = {this.props.cols[1]} rowClicked = {this.handleRowClick} />
                    <Square index={2} label = {this.props.cols[2]} rowClicked = {this.handleRowClick} />
                </div>
            </div>
        );
    }
}

export default SquareRow;
