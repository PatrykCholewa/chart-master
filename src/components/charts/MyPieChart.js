import {Component} from "react";
import React from "react";
import PieChart from "recharts/es6/chart/PieChart"
import Pie from "recharts/es6/polar/Pie"
import {getRenderableNumberDataForSet} from "../../utils/utils";

class MyPieChart extends Component {

    calculatePercent(index) {
        let percent = 100 / this.props.dataSets.length;
        percent = percent * index;
        return percent.toString() + '%';
    }

    getPieList() {
        return this.props.dataSets.map((set, index) => (
            <Pie data={getRenderableNumberDataForSet(set)}
                 key={"PIE" + index}
                 dataKey="y"
                 cx="50%"
                 cy="50%"
                 innerRadius={this.calculatePercent(index)}
                 outerRadius={this.calculatePercent(index + 1)}
                 fill={set.color}/>));
    };

    render() {
        return (
            <PieChart {...this.props.chartParams}>
                {this.getPieList()}
            </PieChart>
        );
    }
}

export default MyPieChart;