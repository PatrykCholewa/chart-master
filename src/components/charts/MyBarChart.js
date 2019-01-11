import React, {Component} from "react";
import {BarChart, Bar} from "recharts";
import {getRenderableDataForDataSets} from "../../utils/utils";


class MyBarChart extends Component {

    getBarList() {
        return this.props.dataSets.map( (set, index) => (<Bar name={set.label} dataKey={index} fill={set.color} stackId="stack"/>) );
    };

    render () {
        return (
            <BarChart {...this.props.chartParams} data={getRenderableDataForDataSets(this.props.dataSets)}>
                {this.props.children}
                {this.getBarList()}
            </BarChart>
        );
    }


}

export default MyBarChart;