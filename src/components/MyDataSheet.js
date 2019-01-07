import {Component} from "react";
import React from "react";
import ReactDataSheet from 'react-datasheet';

class MyDataSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    componentWillReceiveProps(props, context) {
        this.setState({...props});
    }

    // addYClicked() {
    //     this.setState((state) => ({dataXY: state.dataXY.concat([new Array(state.dataXY[0].length).fill('0'),])}));
    //     this.setState((state) => ({labelsY: state.labelsY.concat('NewYLabel')}));
    // }
    //
    // addXClicked() {
    //     let arr = this.state.dataXY.slice();
    //     arr.forEach(row => row.push('0'));
    //     this.setState(() => ({dataXY: arr}));
    //     this.setState((state) => ({labelsX: state.labelsX.concat('NewXLabel')}));
    // }

    generateGrid() {

        let grid = [];
        grid.push(this.state.dataSets.map( set => ({value: set.label, colSpan: 2}) ));

        grid.push([].concat(...this.state.dataSets.map( () => (
            [{value: 'x'}, {value: 'y'}]
        ))));

        this.state.dataSets.forEach( (set, index) => {
            let set_val = set.data.map(point => ([
                {value: `${point.x}`, className: point.valid ? "" : "cell-invalid"},
                {value: `${point.y}`, className: point.valid ? "" : "cell-invalid"}
                ]));
            grid.push([].concat(...set_val));
        });

        // grid.push([{ // last row
        //     readOnly: true,
        //     component: (<button onClick={() => this.addYClicked()}>+</button>),
        //     forceComponent: true
        // }]);

        console.log(grid);
        return grid;
    }

    render() {
        return (
            <ReactDataSheet
                data={this.generateGrid()}
                valueRenderer={(cell) => cell.value}
                onCellsChanged={changes => {
                    // const dataXY = this.state.dataXY.map(row => [...row]);
                    // const labelsX = this.state.labelsX.slice();
                    // const labelsY = this.state.labelsY.slice();
                    // changes.forEach(({cell, row, col, value}) => {
                    //     if (row > 0 && col > 0) {
                    //         dataXY[row - 1][col - 1] = value;
                    //     }
                    //     else if(col!==0 && row===0){
                    //        labelsX[col-1] = value;
                    //     }
                    //     else if(row!==0 && col===0){
                    //         labelsY[row-1] = value;
                    //     }
                    //     else {
                    //         console.log('ERR');
                    //     }
                    // });
                    // this.setState(() => ({dataXY: dataXY}));
                    // this.setState(() => ({labelsX: labelsX}));
                    // this.setState(() => ({labelsY: labelsY}));
                }}
            />
        );
    }
}

export default MyDataSheet;
