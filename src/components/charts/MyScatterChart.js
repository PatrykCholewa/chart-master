import {Component} from "react";
import React from "react";
import ScatterChart from "recharts/es6/chart/ScatterChart";
import Scatter from "recharts/es6/cartesian/Scatter";
import {XAxis, YAxis} from "recharts";
import {getRenderableDataForSet} from "../../utils/utils";
import Cell from "recharts/es6/component/Cell";
import LabelList from "recharts/es6/component/LabelList";
import MyInputCustomLabelDialog from "../MyInputCustomLabelDialog";

class MyScatterChart extends Component {
    constructor(props){
        super(props);
        this.state = {open: false};
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
                            return <Cell key={`CELL ${pointIndex}`} shape="cross" onClick={() => console.log(point)}/>
                        })
                    }
                </Scatter>
            );
        });
    };

    render () {
        return (
            <div>
                <MyInputCustomLabelDialog open={this.state.open} handleClose={()=>this.setState({open: false})} currentLabel="LAB\n⬇"/>
                <ScatterChart {...this.props.chartParams} onClick={()=>this.setState({open: true})}>

                    <XAxis type="number" dataKey="x"/>
                    <YAxis type="number" dataKey="y"/>
                    {this.props.children}
                    {this.getScatterList()}
                </ScatterChart>
            </div>
        );
    }


}

export default MyScatterChart;