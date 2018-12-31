import {SET_COLOR_LIST} from "../constants/ChartActionTypes";

export const colorList = (state = [], action) => {
    switch(action.type) {
        case SET_COLOR_LIST:
            return action.colorList;
        default:
            return state;
    }
};