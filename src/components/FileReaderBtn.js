import React, {Component} from "react";

const cellSeparator = ';';
const rowSeparator = '\n';

class FileReaderBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title',
            dataXY: [['4', '3'], ['2', '1']],
            labelsX: ['LabelX1', 'labelX2'],
            labelsY: ['LabelY1', 'labelY2']
        }
    }


    fileSet(e) {
        let reader = new FileReader();
        reader.readAsText(e.target.files[0]);
        reader.onload = (e) => {
            this.decodeCSV(e.target.result);
        }
    }

    decodeCSV(data) {
        let rows = data.split(rowSeparator);
        console.log(rows);
        rows = rows.map(row => {
            return row.split(cellSeparator);
        });
        rows.pop();

        let dataXYt = [];
        let labelsXt = [];
        let labelsYt = [];
        let titlet = rows[0][0];
        labelsXt = rows[0].slice(1);

        for (let i = 1; i < rows.length; i++) {
            let row = rows[i];
            labelsYt[i - 1] = row.shift();
            dataXYt[i - 1] = row.slice();
        }
        this.setState(() => ({dataXY: dataXYt}));
        this.setState(() => ({title: titlet}));
        this.setState(() => ({labelsX: labelsXt}));
        this.setState(() => ({labelsY: labelsYt}));
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
            <div>
                <input type="file" onChange={(e) => this.fileSet(e)}/>
                <a href={this.encodeCSV()} download="csv_download">Download</a>
            </div>
        );
    }
}

export default FileReaderBtn;