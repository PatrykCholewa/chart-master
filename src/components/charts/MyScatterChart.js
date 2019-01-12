import {Component} from "react";
import React from "react";
import ScatterChart from "recharts/es6/chart/ScatterChart";
import Scatter from "recharts/es6/cartesian/Scatter";
import {XAxis, YAxis} from "recharts";
import {getRenderableDataForSet} from "../../utils/utils";
import Cell from "recharts/es6/component/Cell";
import LabelList from "recharts/es6/component/LabelList";
import VisibleInputCustomLabelDialog from "../../containers/VisibleInputCustomLabelDialog";


class MyScatterChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            labelChangeInfo: {
                currentLabel: undefined,
                dataSetIndex: undefined,
                dataIndex: undefined
            }
        };
    }

    initLabelChange(point, dataSetIndex, pointIndex){
        this.setState({
            labelChangeInfo: {
                currentLabel: point.label,
                dataSetIndex: dataSetIndex,
                dataIndex: pointIndex
            }
        });
        this.setState({open: true});
    }

    getScatterList() {
        return this.props.dataSets.map( (set, index) => {
            const data = getRenderableDataForSet(set);

            return (
                <Scatter name={set.label}
                         key={"SCATTER" + index}
                         data={data}
                         fill={set.color}>
                    <LabelList className="arrow-pointer-container" dataKey="label" position="top" />
                    {
                        data.map((point, pointIndex) => {
                            return <Cell key={`CELL ${pointIndex}`}
                                         shape="cross"
                                         onClick={() => this.initLabelChange(point, index, pointIndex)}/>
                        })
                    }
                </Scatter>
            );
        });
    };

    render () {
        return (
            <div>
                <VisibleInputCustomLabelDialog open={this.state.open}
                                               handleClose={()=>this.setState({open: false})}
                                               {...this.state.labelChangeInfo} />
                <ScatterChart {...this.props.chartParams} >
                    <XAxis type="number" dataKey="x" domain={['dataMin', 'dataMax']}/>
                    <YAxis type="number" dataKey="y"  domain={[0, 'dataMax + 1']}/>
                    {this.props.children}
                    {this.getScatterList()}
                </ScatterChart>
            </div>
        );
    }


}

export default MyScatterChart;