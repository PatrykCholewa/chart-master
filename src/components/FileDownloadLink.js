import React, {Component} from "react";

const cellSeparator = ';';
const rowSeparator = '\n';

class FileDownloadLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            dataXY: [['4', '3'], ['2', '1']],
            labelsX: ['LabelX1', 'labelX2'],
            labelsY: ['LabelY1', 'labelY2']
        }
    }

    encodeCSV() {
        let file;
        let data = [];
        data.push(this.state.title + cellSeparator + this.state.labelsX.join(cellSeparator) + rowSeparator);
        this.state.dataXY.forEach((row, index) => {
            let rowStr = row.join(cellSeparator);
            data.push(this.state.labelsY[index] + cellSeparator + rowStr + rowSeparator);
        });
        let properties = {type: 'text/plain'};
        try {
            file = new File(data, "csv_download", properties);
        } catch (e) {
            file = new Blob(data, properties);
        }
        return URL.createObjectURL(file);
    }


    render() {
        return (
                <a href={this.encodeCSV()} download="csv_download">Download</a>
        );
    }
}

export default FileDownloadLink;