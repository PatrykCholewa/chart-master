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

    generateGrid() {

        let grid = [];
        grid.push(this.state.dataSets.map( set => ({value: set.label, colSpan: 2}) ));

        // new column button

        grid.push([].concat(...this.state.dataSets.map( () => (
            [
                {value: 'x', readOnly: true},
                {value: 'y', readOnly: true}
            ]
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

        return grid;
    }

    render() {
        return (
            <ReactDataSheet
                data={this.generateGrid()}
                valueRenderer={(cell) => cell.value}
                onCellsChanged={changes => {
                    const dataSets = this.state.dataSets;
                    changes.forEach(({cell, row, col, value}) => {
                        if (row === 0) {
                            this.props.setLabelByIndex(value, col);
                        }
                    //     else if(col!==0 && row===0){
                    //        labelsX[col-1] = value;
                    //     }
                    //     else if(row!==0 && col===0){
                    //         labelsY[row-1] = value;
                    //     }
                    //     else {
                    //         console.log('ERR');
                    //     }
                        console.log(dataSets);
                    });
                    // this.setState(() => ({dataXY: dataXY}));
                    // this.setState(() => ({labelsX: labelsX}));
                    // this.setState(() => ({labelsY: labelsY}));
                }}
            />
        );
    };
}

export default MyDataSheet;
