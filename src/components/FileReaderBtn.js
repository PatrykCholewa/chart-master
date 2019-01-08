import React, {Component} from "react";

const cellSeparator = ';';
const rowSeparator = '\n';

class FileReaderBtn extends Component {

    fileSet(e) {
        let reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = (e) => {
            this.decodeCSV(e.target.result);
        }
    }

    decodeCSV(data) {
        let rows = data.split(rowSeparator);

        rows = rows.map(row => {
            return row.split(cellSeparator);
        });

        let readState = [];

        try {

            rows[0].forEach((label, index) => readState.push({index: index, label: label, color: "", data: []}));
            rows[1].forEach((color, index) => {
                readState[index].color = color
            });


            rows.splice(0, 2);

            rows.forEach((row) => {
                for (let j = 0; j < row.length; j += 2) {
                    readState[j / 2].data.push({x: row[j], y: row[j + 1], valid: true})
                }
            });
            this.props.setDataSets(readState);
        } catch (TypeError) {
            console.log("Wrong CSV format");
        }

    }

    render() {
        return (
            <input type="file" onChange={(e) => this.fileSet(e)}/>
        );
    }
}

export default FileReaderBtn;