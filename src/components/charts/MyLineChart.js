import {Component} from "react";
import {isPointRenderable} from "../../utils/utils";
import {CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis} from "recharts";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import LineChart from "recharts/es6/chart/LineChart";
import Line from "recharts/es6/cartesian/Line";

class MyLineChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.chartParams.title,
            isTitleBeingChanged: false
        }
    }

    getData() {
        let xAxisDict = {};

        this.props.dataSets.forEach( set => {
            set.data
                .filter( point => isPointRenderable(point))
                .sort( (p1, p2) => p1.x > p2.x )
                .forEach( point => {
                    let xPoints = xAxisDict[point.x] === undefined ? {} : xAxisDict[point.x];

                    xPoints[set.index] = point.y;
                    xAxisDict[point.x] = xPoints;
                })
        });

        return Object.keys(xAxisDict).map((x) => ({x, ...xAxisDict[x]}));

    }

    getLineList() {
        return this.props.dataSets.map( set => (<Line name={set.label} dataKey={set.index} stroke={set.color} stackId="stack"/>) );
    };

    handleTitleChanged(event){
        this.props.setTitle(this.state.title);
        this.setState({
            isTitleBeingChanged: false
        });
    }

    getTitleDomPart(){
        return this.state.isTitleBeingChanged
            ? (
                <FormControl>
                    <Input autoFocus={true}
                           value={this.state.title}
                           onChange={event => this.setState({title: event.target.value})}
                           onBlur={event => this.handleTitleChanged(event)}/>
                </FormControl>
            ) : (
                <Typography align="center"
                            variant="title"
                            onClick={() => this.setState({isTitleBeingChanged: true})}>
                    {this.props.chartParams.title}
                </Typography>
            );
    }

    render () {
        return (
            <div>
                <div align="center">
                    {this.getTitleDomPart()}
                    <LineChart width={600}
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
                        {this.getLineList()}
                    </LineChart>
                </div>
            </div>
        );
    }


}

export default MyLineChart;