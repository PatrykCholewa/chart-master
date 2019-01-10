import React, {Component} from "react";
import {cellSeparator, rowSeparator} from "../constants/CsvSeparators";
import Button from "@material-ui/core/Button";

class FileReaderBtn extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {resetKey: ""};
    }

    onSubmit(event) {
        let reader = new FileReader();
        try {
            reader.readAsText(this.fileInput.current.files[0]);
            reader.onload = (e) => {
                this.setState({resetKey: this.state.resetKey + "R"});
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
                    rowPoints.push({x: row[col], y: row[col + 1], valid: (!(isNaN(row[col]) || isNaN(row[col + 1])))})
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
            <div className="file-input-button">
                <input
                    accept="text/csv"
                    id="contained-button-file"
                    key={this.state.resetKey || ''}
                    onChange={e => this.onSubmit(e)}
                    ref={this.fileInput}
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" color="default">Import Data</Button>
                </label>
            </div>
        );
    }
}

export default FileReaderBtn;