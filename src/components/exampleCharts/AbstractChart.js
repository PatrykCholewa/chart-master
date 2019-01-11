import React, {Component} from "react";
import {XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";
import {getRenderableDataForDataSets} from "../../utils/utils";
import MyBarChart from "../charts/MyBarChart";

const chartInsideRenderables = [
    (<CartesianGrid strokeDasharray="3 3"/>),
    (<XAxis type="number" dataKey="x"/>),
    (<YAxis/>),
    (<Tooltip/>),
    (<Legend verticalAlign="bottom" wrapperStyle={{lineHeight: '40px'}}/>),
    (<ReferenceLine y={0} stroke='#000'/>)
];

const chartStandardProps = {
    width: 600,
    height: 300,
    stackOffset: "sign",
    margin: {top: 5, right: 30, left: 20, bottom: 5}
};

class AbstractChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.chartParams.title,
            isTitleBeingChanged: false
        }
    }

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
                    <MyBarChart chartParams={chartStandardProps} dataSets={this.props.dataSets}>
                        {chartInsideRenderables}
                    </MyBarChart>
                </div>
            </div>
        );
    }


}

export default AbstractChart;