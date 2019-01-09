import {deepCopyObject} from "../utils/utils";
import {SET_CHART_TITLE} from "../constants/ChartActionTypes";

const initialState = {
    title: "MY CHART"
};

export const chart = (state = initialState, action) => {
    let newState = deepCopyObject(state);
    switch(action.type){
        case SET_CHART_TITLE:
            newState.title = action.newTitle;
            return newState;
        default:
            return newState;
    }
};