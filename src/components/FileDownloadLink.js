import React, {Component} from "react";
import {cellSeparator, rowSeparator} from "../constants/CsvSeparators";
import Button from "@material-ui/core/Button";

class FileDownloadLink extends Component {

    encodeCSV() {

        let data = [];
        let line = [];
        this.props.dataSets.forEach(() => {
            line.push('x');
            line.push('y')
        });

        line.join(cellSeparator);
        data.push(line);
        data.push(rowSeparator);

        this.props.dataSets.forEach((dataset) => {
            let row = [];
            dataset.data.forEach((cell) => {
                row.push(cell.x);
                row.push(cell.y);
            });
            row.join(cellSeparator);
            data.push(row);
            data.push(rowSeparator);
        });

        let properties = {type: 'text/plain'};
        let file;
        try {
            file = new File(data, "csv_download", properties);
        } catch (e) {
            file = new Blob(data, properties);
        }
        return URL.createObjectURL(file);
    }

    render() {
        return (
            <a href={this.encodeCSV()} download="csv_file"><Button variant="contained" color="default">Download</Button></a>
        );
    }
}

export default FileDownloadLink;