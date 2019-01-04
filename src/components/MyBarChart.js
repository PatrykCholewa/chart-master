import React, {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";


class MyBarChart extends Component {

    getData() {
        let xAxisDict = {};

        this.props.dataSets.forEach( set => {
            set.data.forEach( point => {
                let xPoints = xAxisDict[point.x] === undefined ? {} : xAxisDict[point.x];

                xPoints[set.label] = point.y;
                xAxisDict[point.x] = xPoints;
            });
        });

        return Object.keys(xAxisDict).map((x) => ({x, ...xAxisDict[x]}));

    }

    getBarList() {
        return this.props.dataSets.map( set => (<Bar dataKey={set.label} fill={set.color} stackId="stack"/>) );
    };

    render () {
        return (
            <div>
                <input type="button" onClick={this.props.undo} value="Undo"/>
                <input type="button" onClick={this.props.redo} value="Redo"/>
                <BarChart width={600}
                          height={300}
                          data={this.getData()}
                          stackOffset="sign"
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}
                          onClick={this.props.onClick}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis type="number" dataKey="x"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
                    <ReferenceLine y={0} stroke='#000'/>
                    {this.getBarList()}
                </BarChart>
            </div>
        );
    }


}

export default MyBarChart;