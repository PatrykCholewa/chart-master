import {Component} from "react";
import React from "react";
import AreaChart from "recharts/es6/chart/AreaChart";
import Area from "recharts/es6/cartesian/Area";
import {getRenderableDataForDataSets} from "../../utils/utils";
import {XAxis, YAxis} from "recharts";

class MyLineChart extends Component {

    getAreaList() {
        return this.props.dataSets.map((set, index) => (
            <Area name={set.label}
                  key={"AREA" + index}
                  dataKey={index}
                  stroke={set.color}
                  fill={set.color}
                  stackId="stack"/>
        ));
    };

    render() {
        return (
            <AreaChart data={getRenderableDataForDataSets(this.props.dataSets)} {...this.props.chartParams}>
                <XAxis type="number" dataKey="x" domain={['dataMin', 'dataMax']}/>
                <YAxis/>
                {this.props.children}
                {this.getAreaList()}
            </AreaChart>
        );
    }


}

export default MyLineChart;