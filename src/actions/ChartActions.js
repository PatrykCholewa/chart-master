import {ADD_DATA_SET} from "../constants/ChartActionTypes";

export const  addDataSet = (newDataSet) => ({
    type: ADD_DATA_SET,
    newDataSet
});