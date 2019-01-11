import React, {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";
import {isPointRenderable} from "../../utils/utils";


class MyBarChart extends Component {
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
                .forEach( point => {
                let xPoints = xAxisDict[point.x] === undefined ? {} : xAxisDict[point.x];

                xPoints[set.index] = point.y;
                xAxisDict[point.x] = xPoints;
            })
        });

        return Object.keys(xAxisDict).map((x) => ({x, ...xAxisDict[x]}));

    }

    getBarList() {
        return this.props.dataSets.map( set => (<Bar name={set.label} dataKey={set.index} fill={set.color} stackId="stack"/>) );
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