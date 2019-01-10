import React from "react";
import LineChart from "recharts/es6/chart/LineChart";
import Line from "recharts/es6/cartesian/Line";
import {EXAMPLE_POINT_DATA} from "../../constants/DataConstants";
import Paper from "@material-ui/core/Paper/Paper";

class ExampleLineChart extends React.Component {

    render() {
        return (
            <Paper className="example-chart-paper">
                <LineChart width={100}
                           height={100}
                           data={EXAMPLE_POINT_DATA}
                           onClick={() => this.props.onClick()}>
                    <Line name="x" dataKey="y" stroke="black" fill="black"/>
                </LineChart>
            </Paper>
        );
    }
}

export default ExampleLineChart;