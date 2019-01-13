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
                 fill={set.color}
                 stackId="stack"/>
        ));
    };

    render () {
        return (
            <BarChart {...this.props.chartParams} data={getRenderableDataForDataSets(this.props.dataSets)}>
                <XAxis type="number" dataKey="x" domain={['dataMin-1', 'dataMax+1']} />/>
                <YAxis  domain={[0, 'dataMax + 1']}/>
                {this.props.children}
                {this.getBarList()}
            </BarChart>
        );
    }

}

export default MyHorizontalBarChart;
