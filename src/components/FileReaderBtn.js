import React, {Component} from "react";

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
            this.decodeCSV(e.target.result)
        }
    }

    decodeCSV(data) {
        console.log(data)
        let rows = data.split('\x0A');
        console.log(rows);
        rows = rows.map(row => {
            return row.split(',')
        });
        console.log(rows);

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


    render() {
        return (
            <input type="file" onChange={(e) => this.fileSet(e)}/>
        );
    }
}

export default FileReaderBtn;