import {Component} from "react";
import React from "react";
import ReactDataSheet from 'react-datasheet';
import Input from "@material-ui/core/Input/Input";
import {MdAddCircleOutline} from "react-icons/md";
import Typography from "@material-ui/core/Typography/Typography";

const nonDataRows = 3;

class MyDataSheet extends Component {

    onCellsChanged(changes) {
        changes.forEach(({cell, row, col, value}) => {
            if (row === 0) {
                this.props.setLabelByIndex(value, col);
            } else if (row === 1) {
                console.log('CAN"T EDIT XY ROW');
            } else {
                const setIndex = Math.floor(col / 2);
                const dataIndex = row - 3;
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

        const colPointLength =  this.props.dataSets.length;
        const rowPointLength = colPointLength > 0 ? this.props.dataSets[0].data.length : 0;

        //LABEL ROW
        let grid = [
            this.props.dataSets.map( set => (
                {
                    value: set.label,
                    className: "cell-label",
                    colSpan: 2
                })),
        ];

        if( rowPointLength === 0 ) {
            grid = [[]];
        }

        //COLOR ROW
        grid.push(
            this.props.dataSets.map( set => (
                {
                    component: (<Input type="color"
                                       value={set.color}
                                       fullWidth={true}
                                       onChange={ event=>this.props.setColorByIndex(event.target.value, set.index)}/>),
                    forceComponent: true,
                    readOnly: true,
                    colSpan: 2
                })
            )
        );

        //XY ROW
        grid.push([].concat(...this.props.dataSets.map( () => (
            [
                {value: 'x', readOnly: true},
                {value: 'y', readOnly: true}
            ]
        ))));

        //DATA
        for( let row = 0 ; row < rowPointLength ; row++ ){
            let pointRow = [];

            for( let col = 0 ; col < colPointLength ; col++ ){
                const point = this.props.dataSets[col].data[row];
                pointRow.push(
                        {value: `${point.x}`, className: point.valid ? "" : "cell-invalid"},
                        {value: `${point.y}`, className: point.valid ? "" : "cell-invalid"}
                        );
            }

            grid.push(pointRow);
        }

        //ADD COLUMN BUTTON COLUMN
        grid[0].push({
            className: "cell-add-button",
            component: (
                <Typography align="center"
                            variant="display1">
                    <MdAddCircleOutline />
                </Typography>
            ),
            forceComponent: true,
            readOnly: true,
            rowSpan: rowPointLength + nonDataRows
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
                onCellsChanged={changes => this.onCellsChanged(changes)}
            />
        );
    };
}

export default MyDataSheet;
