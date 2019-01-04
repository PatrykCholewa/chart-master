import React, {Component} from "react";
import {BAR_CHART} from "../constants/ChartType";
import VisibleChart from "../containers/VisibleChart";

class ExampleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: BAR_CHART,
            dataSets:[
                {
                    label: "Data 1",
                    color: 'red',
                    data: [
                        {x: '1', y: '300'},
                        {x: '3', y: '-100'},
                        {x: '-3', y: '-8'},
                        {x: '1.2', y: '-50'}
                    ],
                },
                {
                    label: "Data 2",
                    color: 'blue',
                    data: [
                        {x: '1', y: '456'},
                        {x: '2', y: '230'},
                        {x: '-3', y: '450'},
                        {x: '3.4', y: '154'}
                    ],
                }
            ]
        }
    }

    render() {
        return (
            <VisibleChart {...this.state} />
        );
    }
}

export default ExampleChart;