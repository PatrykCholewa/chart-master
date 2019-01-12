import React, {Component} from "react";
import {ReferenceLine, CartesianGrid, Tooltip, Legend} from "recharts";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";
import MyBarChart from "./charts/MyBarChart";
import {VERTICAL_BAR_CHART, LINE_CHART, SCATTER_CHART, PIE_CHART, AREA_CHART} from "../constants/ChartType";
import MyLineChart from "./charts/MyLineChart";
import MyScatterChart from "./charts/MyScatterChart";
import MyPieChart from "./charts/MyPieChart";
import MyAreaChart from "./charts/MyAreaChart";
import VisibleInputCustomLabelDialog from "../containers/VisibleInputCustomLabelDialog";

const chartInsideRenderables = [
    (<CartesianGrid key={"CHART INSIDE RENDERABLE 1"} strokeDasharray="3 3"/>),
    (<Tooltip key={"CHART INSIDE RENDERABLE 2"}/>),
    (<Legend key={"CHART INSIDE RENDERABLE 3"} verticalAlign="bottom" wrapperStyle={{lineHeight: '40px'}}/>),
    (<ReferenceLine key={"CHART INSIDE RENDERABLE 4"} y={0} stroke='#000'/>)
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
            isTitleBeingChanged: false,
            labelChangeDialogOpen: false,
            labelChangeInfo: {
                currentLabel: undefined,
                dataSetIndex: undefined,
                dataIndex: undefined
            }
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

    initLabelChange(point, dataSetIndex, pointIndex){
        this.setState({
            labelChangeDialogOpen: true,
            labelChangeInfo: {
                currentLabel: point.label,
                dataSetIndex: dataSetIndex,
                dataIndex: pointIndex
            }
        });
    }

    getChartByType() {
        switch(this.props.chartParams.type){
            case LINE_CHART:
                return (
                    <MyLineChart chartParams={chartStandardProps} dataSets={this.props.dataSets}>
                        {chartInsideRenderables}
                    </MyLineChart>
                );
            case VERTICAL_BAR_CHART:
                return (
                    <MyBarChart chartParams={chartStandardProps} dataSets={this.props.dataSets}>
                        {chartInsideRenderables}
                    </MyBarChart>
                );
            case SCATTER_CHART:
                return (
                    <MyScatterChart chartParams={chartStandardProps}
                                    dataSets={this.props.dataSets}
                                    initLabelChange={(p, dsIndex, dIndex) => this.initLabelChange(p, dsIndex, dIndex)}>
                        {chartInsideRenderables}
                    </MyScatterChart>
                );
            case PIE_CHART:
                return (
                    <MyPieChart chartParams={chartStandardProps} dataSets={this.props.dataSets}/>
                );
            case AREA_CHART:
                return (
                    <MyAreaChart chartParams={chartStandardProps} dataSets={this.props.dataSets}>
                        {chartInsideRenderables}
                    </MyAreaChart>
                );
            default:
                return [];
        }
    }

    render () {
        return (
            <div align="center">
                <VisibleInputCustomLabelDialog open={this.state.labelChangeDialogOpen}
                                               handleClose={()=>this.setState({labelChangeDialogOpen: false})}
                                               {...this.state.labelChangeInfo} />
                {this.getTitleDomPart()}
                {this.getChartByType()}
            </div>
        );
    }


}

export default AbstractChart;