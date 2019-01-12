import React, {Component} from "react";
import {XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";
import MyBarChart from "./charts/MyBarChart";
import {BAR_CHART, LINE_CHART, SCATTER_CHART} from "../constants/ChartType";
import MyLineChart from "./charts/MyLineChart";
import MyScatterChart from "./charts/MyScatterChart";

const chartInsideRenderables = [
    (<CartesianGrid strokeDasharray="3 3"/>),
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

    getChartByType() {
        switch(this.props.chartParams.type){
            case LINE_CHART:
                return (
                    <MyLineChart chartParams={chartStandardProps} dataSets={this.props.dataSets}>
                        {chartInsideRenderables}
                    </MyLineChart>
                );
            case BAR_CHART:
                return (
                    <MyBarChart chartParams={chartStandardProps} dataSets={this.props.dataSets}>
                        {chartInsideRenderables}
                    </MyBarChart>
                );
            case SCATTER_CHART:
                return (
                    <MyScatterChart chartParams={chartStandardProps} dataSets={this.props.dataSets}>
                        {chartInsideRenderables}
                    </MyScatterChart>
                );
            default:
                return [];
        }
    }

    render () {
        return (
            <div align="center">
                {this.getTitleDomPart()}
                {this.getChartByType()}
            </div>
        );
    }


}

export default AbstractChart;