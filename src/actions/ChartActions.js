import {
    ADD_DATA_SET,
    SET_NEW_DATA_BY_DATA_SET_INDEX,
    SET_DATA_SETS,
    SET_LABEL_BY_INDEX,
    SET_PURE_DATA, SET_CHART_TITLE, SET_COLOR_BY_INDEX
} from "../constants/ChartActionTypes";

export const  addDataSet = (newDataSet) => ({
    type: ADD_DATA_SET,
    newDataSet
});

export const setDataSets = (dataSets) => ({
    type: SET_DATA_SETS,
    dataSets
});

export const setPureData = (dataList) => ({
    type: SET_PURE_DATA,
    dataList
});

export const setLabelByIndex = (newLabel, dataSetIndex) => ({
    type: SET_LABEL_BY_INDEX,
    newLabel,
    dataSetIndex
});

export const setNewDataByDataSetIndex = (newData, dataSetIndex, dataIndex) => ({
    type: SET_NEW_DATA_BY_DATA_SET_INDEX,
    newData,
    dataSetIndex,
    dataIndex
});

export const setChartTitle = newTitle => ({
    type: SET_CHART_TITLE,
    newTitle
});

export const setColorByIndex = (newColor, dataSetIndex) => ({
    type: SET_COLOR_BY_INDEX,
    newColor,
    dataSetIndex
});