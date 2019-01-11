import {Bar, BarChart} from "recharts";
import React from "react";
import {EXAMPLE_BAR_DATA} from "../../constants/DataConstants";
import Paper from "@material-ui/core/Paper/Paper";

class ExampleVerticalBarChart extends React.Component {
    render() {
        return (
            <Paper className="example-chart-paper">
                <BarChart width={100}
                          height={100}
                          data={EXAMPLE_BAR_DATA}
                          onClick={() => this.props.onClick()}>
                    <Bar name="x" dataKey="y" stacked={true}/>
                </BarChart>
            </Paper>
        );
    }
}

export default ExampleVerticalBarChart;
