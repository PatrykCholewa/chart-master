import React, {Component} from "react";

const cellSeparator = ';';
const rowSeparator = '\n';

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
            console.error("Wrong CSV format");
        }

    }

    render() {
        return (
            <div>
                <label>
                    <input type="file" ref={this.fileInput} />
                </label>
                <button type="submit" onClick={e=>this.onSubmit()}>Read CSV</button>
            </div>
        );
    }
}

export default FileReaderBtn;