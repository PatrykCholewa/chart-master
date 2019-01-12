import {Component} from "react";
import React from "react";
import ScatterChart from "recharts/es6/chart/ScatterChart";
import Scatter from "recharts/es6/cartesian/Scatter";
import {XAxis, YAxis} from "recharts";
import {getRenderableDataForSet} from "../../utils/utils";


class MyScatterChart extends Component {

    getScatterList() {
        return this.props.dataSets.map( (set, index) => (
            <Scatter name={set.label}
                     key={"SCATTER" + index}
                     data={getRenderableDataForSet(set)}
                     fill={set.color}/>
        ));
    };

    render () {
        return (
            <ScatterChart {...this.props.chartParams}>
                <XAxis type="number" dataKey="x" domain={['dataMin', 'dataMax']}/>
                <YAxis type="number" dataKey="y"/>
                {this.props.children}
                {this.getScatterList()}
            </ScatterChart>
        );
    }


}

export default MyScatterChart;