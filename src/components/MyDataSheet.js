import {Component} from "react";
import React from "react";
import ReactDataSheet from 'react-datasheet';

class MyDataSheet extends Component {

    generateGrid() {

        let grid = [];
        grid.push(this.props.dataSets.map( set => ({value: set.label, colSpan: 2}) ));

        // new column button

        grid.push([].concat(...this.props.dataSets.map( () => (
            [
                {value: 'x', readOnly: true},
                {value: 'y', readOnly: true}
            ]
        ))));

        this.props.dataSets.forEach( (set, index) => {
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
                    changes.forEach(({cell, row, col, value}) => {
                        if (row === 0) {
                            this.props.setLabelByIndex(value, col);
                        }
                        else if(row === 1){
                            console.log('CAN"T EDIT XY ROW');
                        }
                        else {
                            const setIndex = Math.floor(col / 2);
                            const dataIndex = row - 2;
                            const newData = this.props.dataSets[dataIndex].data[setIndex];

                            console.log(this.props.dataSets[setIndex].data);

                            if( col % 2 ){
                                newData.y = value;
                            } else {
                                newData.x = value;
                            }

                            newData.valid = !Number.isNaN(value);

                            this.props.addNewDataByDataSetIndex({...newData}, setIndex, dataIndex);
                        }
                    });
                }}
            />
        );
    };
}

export default MyDataSheet;