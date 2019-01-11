import {deepCopyObject} from "../utils/utils";
import {SET_CHART_TITLE, SET_CHART_TYPE} from "../constants/ChartActionTypes";
import {BAR_CHART} from "../constants/ChartType";

const initialState = {
    title: "MY CHART",
    type: BAR_CHART
};

export const chart = (state = initialState, action) => {
    let newState = deepCopyObject(state);
    switch(action.type){
        case SET_CHART_TITLE:
            newState.title = action.newTitle;
            return newState;
        case SET_CHART_TYPE:
            newState.type = action.newChartType;
            return newState;
        default:
            return newState;
    }
};