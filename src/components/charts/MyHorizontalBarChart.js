import {Component} from "react";
import {Bar, BarChart, XAxis, YAxis} from "recharts";
import {getRenderableDataForDataSets} from "../../utils/utils";
import React from "react";

class MyHorizontalBarChart extends Component {

    getBarList() {
        return this.props.dataSets.map( (set, index) => (
            <Bar name={set.label}
                 key={"BAR" + index}
                 dataKey={index}
                 fill={set.color}/>
        ));
    };

    render () {
        return (
            <BarChart {...this.props.chartParams}
                      layout="vertical"
                      data={getRenderableDataForDataSets(this.props.dataSets)}>
                <XAxis type="number"/>
                <YAxis type="category" dataKey="x"/>
                {this.props.children}
                {this.getBarList()}
            </BarChart>
        );
    }

}

export default MyHorizontalBarChart;
