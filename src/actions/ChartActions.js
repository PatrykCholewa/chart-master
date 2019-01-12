import {
    SET_NEW_DATA_BY_DATA_SET_INDEX,
    SET_LABEL_BY_INDEX,
    SET_PURE_DATA,
    SET_CHART_TITLE,
    SET_COLOR_BY_INDEX,
    ADD_NEW_EMPTY_DATA_SET,
    ADD_NEW_EMPTY_DATA_TO_EVERY_SET,
    SET_CHART_TYPE, SET_DATA_LABEL
} from "../constants/ChartActionTypes";

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

export const addNewEmptyDataSet = () => ({
    type: ADD_NEW_EMPTY_DATA_SET
});

export const addNewEmptyDataToEverySet = () => ({
    type: ADD_NEW_EMPTY_DATA_TO_EVERY_SET
});

export const setChartType = newChartType => ({
    type: SET_CHART_TYPE,
    newChartType
});

export const setDataLabel = (newLabel, dataSetIndex, dataIndex) => ({
    type: SET_DATA_LABEL,
    newLabel,
    dataSetIndex,
    dataIndex
});