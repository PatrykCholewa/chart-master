import {Component} from "react";
import React from "react";
import LineChart from "recharts/es6/chart/LineChart";
import Line from "recharts/es6/cartesian/Line";
import {getRenderableDataForDataSets} from "../../utils/utils";
import {XAxis, YAxis} from "recharts";

class MyLineChart extends Component {

    getLineList() {
        return this.props.dataSets.map( (set, index) => (
            <Line name={set.label}
                  key={"LINE" + index}
                  dataKey={index}
                  stroke={set.color}
                  stackId="stack"/>
        ));
    };

    render () {
        return (
            <LineChart data={getRenderableDataForDataSets(this.props.dataSets)} {...this.props.chartParams}>
                <XAxis type="number" dataKey="x"/>
                <YAxis/>
                {this.props.children}
                {this.getLineList()}
            </LineChart>
        );
    }


}

export default MyLineChart;