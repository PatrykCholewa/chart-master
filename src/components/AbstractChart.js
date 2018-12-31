import React from "react";
import {BAR_CHART, LINE_CHART} from "../constants/ChartType";
import {Bar, Line} from "react-chartjs-2";

const getData = (labelList, xData, yDataList, colorList) => {
    let sets = [];
    for( let i = 0 ; i < labelList.length ; i++ ){
        sets.push({
            label: labelList[i],
            data: yDataList[i],
            fill: false,
            borderColor: colorList[i],
            backgroundColor: colorList[i]
        });
    }

    return {
        labels: xData,
        datasets: sets
    };
};

const getParams = ({labelList, xData, yDataList, colorList}) => {
    return {
        data: getData(labelList, xData, yDataList, colorList),
        options: {
        }
    };
};

const AbstractChart = ({chartType, labelList, xData, yDataList, colorList, onClick}) => {
    const params = getParams({labelList, xData, yDataList, colorList});
    switch (chartType) {
        case LINE_CHART:
        default:
            return (
                <div onClick={onClick}>
                    <Line {...params}/>
                </div>
            );
        case BAR_CHART:
            return (
                <div onClick={onClick}>
                    <Bar {...params}/>
                </div>
            );
    }
};

export default AbstractChart;