import {Component} from "react";
import React from "react";
import ReactDataSheet from 'react-datasheet';

class MyDataSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelsX: ['LabelX1', 'labelX2', 'labelX3', 'labelX4', 'labelX5'],
            ...props
        };
    }

    componentWillReceiveProps(props, context) {
        this.setState({...props});
        console.log(this.state);
    }

    addYClicked() {
        this.setState((state) => ({dataXY: state.dataXY.concat([new Array(state.dataXY[0].length).fill('0'),])}));
        this.setState((state) => ({labelsY: state.labelsY.concat('NewYLabel')}));
    }

    addXClicked() {
        let arr = this.state.dataXY.slice();
        arr.forEach(row => row.push('0'));
        this.setState(() => ({dataXY: arr}));
        this.setState((state) => ({labelsX: state.labelsX.concat('NewXLabel')}));
    }

    generateGrid() {

        let grid = [[{ // first row
            readOnly: true, component: (
                <button onClick={() => console.log(this.state)}>
                    Data Import/Export
                </button>
            ), forceComponent: true
        }].concat(this.state.labelsX.map(val => ({value: `${val}`})), [{
            readOnly: true,
            component: (<button onClick={() => this.addXClicked()}>+</button>),
            forceComponent: true
        }])];
        this.state.dataXY.forEach( (row, index) => {
            let row_val = row.map(val => ({value: `${val[0]} ; ${val[1]}`}));
            grid.push([{value: this.state.labelsY[index]}].concat(row_val));
        });
        grid.push([{ // last row
            readOnly: true,
            component: (<button onClick={() => this.addYClicked()}>+</button>),
            forceComponent: true
        }]);
        return grid;
    }

    render() {
        return (
            <ReactDataSheet
                data={this.generateGrid()}
                valueRenderer={(cell) => cell.value}
                dataRenderer={(cell) => cell.value}
                onCellsChanged={changes => {
                    const dataXY = this.state.dataXY.map(row => [...row]);
                    const labelsX = this.state.labelsX.slice();
                    const labelsY = this.state.labelsY.slice();
                    changes.forEach(({cell, row, col, value}) => {
                        if (row > 0 && col > 0) {
                            dataXY[row - 1][col - 1] = value;
                            console.log('UP D' + cell + ' ' + row + ' ' + col + ' ' + value);
                        }
                        else if(col!==0 && row===0){
                           labelsX[col-1] = value;
                            console.log('UP X' + cell + ' ' + row + ' ' + col + ' ' + value);
                        }
                        else if(row!==0 && col===0){
                            labelsY[row-1] = value;
                            console.log('UP Y' + cell + ' ' + row + ' ' + col + ' ' + value);
                        }
                        else {
                            console.log('ERR');
                        }
                    });
                    this.setState(() => ({dataXY: dataXY}));
                    this.setState(() => ({labelsX: labelsX}));
                    this.setState(() => ({labelsY: labelsY}));
                }}
            />
        );
    }
}

export default MyDataSheet;
