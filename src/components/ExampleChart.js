import React, {Component} from "react";
import {BAR_CHART} from "../constants/ChartType";
import VisibleChart from "../containers/VisibleChart";

class ExampleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: BAR_CHART,
            labelList: ["Data 1", "Data 2"],
            data: [
                {x: '1', v0: 300, v1: 456},
                {x: '2', v1: 230},
                {x: '3', v0: -100},
                {x: '-3', v0: -8, v1: 450},
                {x: '3.4', v1: 154},
                {x: '1.2', v0: -50}
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