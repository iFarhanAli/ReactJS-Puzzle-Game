import React, { Component } from 'react';
import './Square.css';

class Square extends React.Component {
    constructor(props){
        super();

        this.state = {
            index: props.index,
            label:props.label,
            btn: null,
            handleRowClick:props.rowClicked
        };
    }
    changeColor() {
        this.setState({
            btn:<div>
                <button className="square-up-btn"  onClick={() => {this.state.handleRowClick(this.state.index,'U'); this.render()}}>
                    <img src="https://maxcdn.icons8.com/Share/icon/Arrows//up_arrow1600.png" alt="" height="30" width="42" />
                </button>
                <button className="square-left-btn" onClick={() => this.state.handleRowClick(this.state.index,'L')}>
                    <img src="https://maxcdn.icons8.com/Share/icon/Arrows//arrows_long_left1600.png" alt="" height="30" width="42" />
                </button>
                <button className="square-right-btn"onClick={() => this.state.handleRowClick(this.state.index,'R')} >
                    <img src="https://maxcdn.icons8.com/Share/icon/Arrows//arrows_long_right1600.png" alt="" height="30" width="42" />
                </button>
                <button className="square-down-btn" onClick={() => this.state.handleRowClick(this.state.index,'D')}>
                    <img src="https://maxcdn.icons8.com/Share/icon/Arrows//down_filled1600.png" alt="" height="30" width="42" />
                </button>
            </div>,
            label:null
        });
    }

    revertColor(){
        this.setState({
            btn:null,
            label:this.props.label
        });
    }
    render() {
        return (
            <h1 className="Square-box"
                onMouseEnter={this.changeColor.bind(this)}
                onMouseLeave={this.revertColor.bind(this)}
            >{this.state.btn}
            <br/>
                {this.props.label}
            </h1>
        );
    }
}
export default Square;
