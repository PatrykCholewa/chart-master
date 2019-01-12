import React, {Component} from "react";
import {BarChart, Bar, XAxis, YAxis} from "recharts";
import {getRenderableDataForDataSets} from "../../utils/utils";


class MyBarChart extends Component {

    getBarList() {
        return this.props.dataSets.map( (set, index) => (
            <Bar name={set.label}
                 key={"BAR" + index}
                 dataKey={index}
                 fill={set.color}
                 stackId="stack"/>
        ));
    };

    render () {
        return (
            <BarChart {...this.props.chartParams} data={getRenderableDataForDataSets(this.props.dataSets)}>
                <XAxis type="number" dataKey="x"/>
                <YAxis/>
                {this.props.children}
                {this.getBarList()}
            </BarChart>
        );
    }


}

export default MyBarChart;