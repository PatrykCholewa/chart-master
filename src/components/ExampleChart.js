import React, {Component} from "react";
import {LINE_CHART} from "../constants/ChartType";
import VisibleChart from "../containers/VisibleChart";

class ExampleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: LINE_CHART,
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'red'
                }]
            }
        }
    }

    render() {
        return (
            <div className="chart">
                <VisibleChart {... this.state}/>
            </div>
        );
    }
}

export default ExampleChart;