import React from "react";
import {BAR_CHART, LINE_CHART} from "../constants/ChartType";
import {BarChart, Bar, XAxis, YAxis, ReferenceLine, Brush, CartesianGrid, Tooltip, Legend} from "recharts";



const getBarList = (data, colorList) => {
    let html = [];

    for( let i = 0 ; i < colorList.length ; i++ ) {
        html.push(<Bar dataKey={"v" + i} fill={colorList[i]} stackId="stack" />);
    }

    console.log(html);
    return html;

};

const AbstractChart = ({chartType, data, colorList, onClick}) => {
    switch (chartType) {
        case LINE_CHART:
        case BAR_CHART:
        default:
            return (
                <div onClick={onClick}>
                    <BarChart width={600} height={300} data={data} stackOffset="sign"
                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis type="number" dataKey="x"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
                        <ReferenceLine y={0} stroke='#000'/>
                        {getBarList(data, colorList)}
                    </BarChart>
                </div>
            );
    }
};

export default AbstractChart;