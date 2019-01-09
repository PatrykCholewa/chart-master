import React, {Component} from "react";
import {cellSeparator, rowSeparator} from "../constants/CsvSeparators";
import Button from "@material-ui/core/Button";

class FileReaderBtn extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
    }

    onSubmit() {
        let reader = new FileReader();
        try {
            reader.readAsText(this.fileInput.current.files[0]);
            reader.onload = (e) => {
                this.decodeCSV(e.target.result);
            }
        } catch (TypeError) {
            console.error(TypeError.toString());
        }
    }

    decodeCSV(data) {
        let rows = data.split(rowSeparator);

        rows = rows.map(row => {
            return row.split(cellSeparator);
        });

        rows.pop();

        let readState = [];

        try {
            rows.splice(0, 1);

            rows.forEach((row) => {
                let rowPoints = [];
                for (let col = 0; col < row.length; col += 2) {
                    rowPoints.push({x: row[col], y: row[col + 1], valid: true})
                }
                readState.push(rowPoints);
            });

            this.props.setPureData(readState);
        } catch (TypeError) {
            console.error("Wrong CSV format");
        }

    }

    render() {
        return (
            <div>
                <label>
                    <input type="file" ref={this.fileInput}/>
                </label>
                <Button variant="contained" color="default" type="submit" onClick={e => this.onSubmit()}>Import Data</Button>
            </div>
        );
    }
}

export default FileReaderBtn;