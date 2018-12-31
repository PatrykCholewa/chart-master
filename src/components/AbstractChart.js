import React from "react";
import LineChart from "./LineChart";
import {LINE_CHART} from "../constants/ChartType";

const AbstractChart = ({chartType, labelList, datasets, colorList, onClick}) => {
    switch (chartType) {
        case LINE_CHART:
            return (
                <LineChart labelList={labelList}
                           datasets={datasets}
                           colorList={colorList}
                           onClick={onClick}/>
            );
        default:
            return (
                <LineChart labelList={labelList}
                           datasets={datasets}
                           colorList={colorList}
                           onClick={onClick}/>
            );
    }
};

export default AbstractChart;