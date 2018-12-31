import {ADD_COLOR, SET_COLOR_LIST, SET_DEFAULT_COLORS} from "../constants/ChartActionTypes";
import {DEFAULT_COLOR_LIST} from "../constants/DefaultColorList";

export const colorList = (state = [], action) => {
    switch(action.type) {
        case SET_COLOR_LIST:
            return action.colorList;
        case SET_DEFAULT_COLORS:
            return DEFAULT_COLOR_LIST.slice(0, action.length);
        case ADD_COLOR:
            let next = action.color ? action.color : DEFAULT_COLOR_LIST[state.length];
            next = next ? next : "gray";
            return [...state, next];
        default:
            return state;
    }
};