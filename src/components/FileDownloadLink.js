import React, {Component} from "react";
import {cellSeparator, rowSeparator} from "../constants/CsvSeparators";

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
            <a href={this.encodeCSV()} download="csv_download">CSV Download</a>
        );
    }
}

export default FileDownloadLink;