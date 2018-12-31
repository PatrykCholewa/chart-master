import {Component} from "react";
import React from "react";
import ReactDataSheet from 'react-datasheet';

class ExampleDataSheet extends Component {
    constructor (props) {
        super(props);
        this.state = {
            grid: [
                [{value:  1}, {value:  3}],
                [{value:  2}, {value:  4}]
            ]
        }
    }

    render() {
        return (
            <ReactDataSheet
                data={this.state.grid}
                valueRenderer={(cell) => cell.value}
                onCellsChanged={changes => {
                    const grid = this.state.grid.map(row => [...row]);
                    changes.forEach(({cell, row, col, value}) => {
                        grid[row][col] = {...grid[row][col], value}
                    });
                    this.setState({grid})
                }}
            />
        );
    }
}

export default ExampleDataSheet;
