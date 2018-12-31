import React from "react";
import {Line} from "react-chartjs-2";

const getData = (labelList, datasets, colorList) => {
    let sets = [];

    for( let i = 0 ; i < datasets.length ; i++ ){
        sets.push({
            label: labelList[i],
            data: datasets[i],
            backgroundColor: colorList[i]
        });
    }

    return {
        datasets: sets
    };
};

const LineChart = ({labelList, datasets, colorList, onClick}) => (
    <div onClick={onClick}>
        <Line data={getData(labelList, datasets, colorList)}/>
    </div>
);

export default LineChart;