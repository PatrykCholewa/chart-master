import React, {Component} from "react";
import {BAR_CHART} from "../constants/ChartType";
import VisibleChart from "../containers/VisibleChart";

class ExampleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: BAR_CHART
        }
    }

    render() {
        return (
            <VisibleChart {...this.state} />
        );
    }
}

export default ExampleChart;