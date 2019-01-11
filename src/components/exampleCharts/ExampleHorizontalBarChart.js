import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import {Bar, BarChart} from "recharts";
import {EXAMPLE_BAR_DATA} from "../../constants/DataConstants";

class ExampleHorizontalBarChart extends React.Component {
    render() {
        return (
            <Paper className="example-chart-paper">
                <BarChart className="horizontal-chart"
                          width={100}
                          height={100}
                          data={EXAMPLE_BAR_DATA}
                          onClick={() => this.props.onClick()}>
                    <Bar name="x" dataKey="y"/>
                </BarChart>
            </Paper>
        );
    }
}

export default ExampleHorizontalBarChart;