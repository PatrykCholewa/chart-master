import {Component} from "react";
import React from "react";
import ReactDataSheet from 'react-datasheet';
import TextField from "@material-ui/core/TextField/TextField";
import Input from "@material-ui/core/Input/Input";

class MyDataSheet extends Component {

    onCellsChanged(changes) {
        changes.forEach(({cell, row, col, value}) => {
            if (row === 0) {
                this.props.setLabelByIndex(value, col);
            } else if (row === 1) {
                console.log('CAN"T EDIT XY ROW');
            } else {
                const setIndex = Math.floor(col / 2);
                const dataIndex = row - 2;
                const newData = this.props.dataSets[setIndex].data[dataIndex];

                if (col % 2) {
                    newData.y = value;
                } else {
                    newData.x = value;
                }

                newData.valid = !isNaN(value);

                this.props.addNewDataByDataSetIndex(newData, setIndex, dataIndex);
            }
        });
    }

    generateGrid() {

        let grid = [
            this.props.dataSets.map( set => (
                {
                    component: (<Input type="color"
                                       value="#44555"
                                       defaultValue="#445555"
                                       onChange={ event=>this.props.setColorByIndex(event.target.value, set)}/>),
                    forceComponent: true,
                    readOnly: true,
                    colSpan: 2
                })),
            this.props.dataSets.map( set => (
                {
                    value: set.label,
                    className: "cell-label",
                    colSpan: 2
                }))
        ];

        // new column button

        grid.push([].concat(...this.props.dataSets.map( () => (
            [
                {value: 'x', readOnly: true},
                {value: 'y', readOnly: true}
            ]
        ))));

        const colLength =  this.props.dataSets.length;
        const rowPointLength = colLength > 0 ? this.props.dataSets[0].data.length : 0;

        for( let row = 0 ; row < rowPointLength ; row++ ){
            let pointRow = [];

            for( let col = 0 ; col < colLength ; col++ ){
                const point = this.props.dataSets[col].data[row];
                pointRow.push(
                        {value: `${point.x}`, className: point.valid ? "" : "cell-invalid"},
                        {value: `${point.y}`, className: point.valid ? "" : "cell-invalid"}
                        );
            }

            grid.push(pointRow);
        }

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
                onCellsChanged={changes => this.onCellsChanged(changes)}
            />
        );
    };
}

export default MyDataSheet;
