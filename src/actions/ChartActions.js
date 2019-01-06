import {ADD_DATA_SET, SET_DATA_SETS, SET_PURE_DATA} from "../constants/ChartActionTypes";

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