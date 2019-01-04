import React, {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";


class MyBarChart extends Component {
    constructor(props){
        super(props);
        this.state = {...props};
    }

    getBarList() {
        let html = [];

        for( let i = 0 ; i < this.props.labelList.length ; i++ ) {
            html.push(
                <Bar dataKey={"v" + i} name={this.props.labelList[i]} fill={this.props.colorList[i]} stackId="stack"/>
            );
        }

        return html;

    };

    render () {
        return (
            <div onClick={this.props.onClick}>
                <BarChart width={600} height={300} data={this.state.data} stackOffset="sign"
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
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