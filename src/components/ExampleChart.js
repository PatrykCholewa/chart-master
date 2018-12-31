import React, {Component} from "react";
import {BAR_CHART} from "../constants/ChartType";
import VisibleChart from "../containers/VisibleChart";

class ExampleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: BAR_CHART,
            labelList: ["1st set"],
            xData: [1, 2, 3, 4, 5, 6],
            yDataList: [[12, 19, 3, 5, 2, 3]]
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