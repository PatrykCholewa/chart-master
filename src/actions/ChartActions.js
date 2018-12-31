import {ADD_COLOR, SET_COLOR_LIST, SET_DEFAULT_COLORS} from "../constants/ChartActionTypes";

export const setColorList = (colorList) => ({
    type: SET_COLOR_LIST,
    colorList
});

export const  addColor = (color) => ({
    type: ADD_COLOR,
    color
});

export const setDefaultColors = (length) => ({
    type: SET_DEFAULT_COLORS,
    length
});