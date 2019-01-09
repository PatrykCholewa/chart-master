import React, {Component} from "react";

const cellSeparator = ',';
const rowSeparator = '\n';

class FileReaderBtn extends Component {

    fileSet(e) {
        let reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = (e) => {
            this.decodeCSV(e.target.result);
        };
    }

    decodeCSV(data) {
        let rows = data.split(rowSeparator);

        rows = rows.map(row => {
            return row.split(cellSeparator);
        });

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
        } catch (err) {
            console.log("Wrong CSV format");
            console.log(err);
        }

    }

    render() {
        return (
            <input type="file" onChange={(e) => this.fileSet(e)}/>
        );
    }
}

export default FileReaderBtn;