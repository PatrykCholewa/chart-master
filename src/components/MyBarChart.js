import React, {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";


class MyBarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.chartParams.title
        }
    }

    componentWillReceiveProps(props, context){
        this.setState({title: props.chartParams.title})
    }

    getData() {
        let xAxisDict = {};

        this.props.dataSets.forEach( set => {
            set.data.forEach( point => {
                let xPoints = xAxisDict[point.x] === undefined ? {} : xAxisDict[point.x];

                xPoints[set.index] = point.y;
                xAxisDict[point.x] = xPoints;
            });
        });

        return Object.keys(xAxisDict).map((x) => ({x, ...xAxisDict[x]}));

    }

    getBarList() {
        return this.props.dataSets.map( set => (<Bar name={set.label} dataKey={set.index} fill={set.color} stackId="stack"/>) );
    };

    render () {
        return (
            <div>
                <Button variant="contained" color="default" onClick={this.props.undo}>Undo</Button>
                <Button variant="contained" color="default" onClick={this.props.redo}>Redo</Button>
                <div align="center">
                    <FormControl>
                        <Input autoFocus={true}
                               value={this.state.title}
                               onChange={event=>this.setState({title: event.target.value})}
                               onBlur={event=>this.props.setTitle(this.state.title)}/>
                    </FormControl>
                    <Typography align="center" variant="title">{this.props.chartParams.title}</Typography>
                    <BarChart width={600}
                              height={300}
                              data={this.getData()}
                              stackOffset="sign"
                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis type="number" dataKey="x"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend verticalAlign="bottom" wrapperStyle={{lineHeight: '40px'}}/>
                        <ReferenceLine y={0} stroke='#000'/>
                        {this.getBarList()}
                    </BarChart>
                </div>
            </div>
        );
    }


}

export default MyBarChart;