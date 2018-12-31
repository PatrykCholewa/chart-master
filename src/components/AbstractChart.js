import React from "react";
import {Line} from "react-chartjs-2";
import {LINE_CHART} from "../constants/ChartType"; //Used import

const getChart = (chartType, data) => {
    switch (chartType) {
        case LINE_CHART:
            return (<Line data={data}/>);
        default:
            return (<Line data={data}/>);
    }
};

const AbstractChart = ({chartType, data}) => (
    <div className="chart">
        {getChart(chartType,data)}
    </div>
);

export default AbstractChart;