import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import {EXAMPLE_POINT_DATA} from "../../constants/DataConstants";
import AreaChart from "recharts/es6/chart/AreaChart";
import Area from "recharts/es6/cartesian/Area";

class ExampleAreaChart extends React.Component {
    render() {
        return (
            <Paper className="example-chart-paper">
                <AreaChart width={100}
                           height={100}
                           onClick={() => this.props.onClick()}>
                    <Area data={EXAMPLE_POINT_DATA} nameKey="x" dataKey="y" stroke="black" fill="black" fillOpacity={1}/>
                </AreaChart>
            </Paper>
        );
    }
}

export default ExampleAreaChart;