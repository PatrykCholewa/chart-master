import {ADD_DATA_SET, SET_DATA_SETS, SET_PURE_DATA} from "../constants/ChartActionTypes";
import {DEFAULT_COLOR_LIST} from "../constants/DefaultColorList";

function randomData() {
    const randLen = () => Math.random() * 10 % 5;
    const randVal = () => (Math.random() * 10 - 5).toPrecision(4);
    let data = [];

    for( let i = 0 ; i < randLen() % 5 ; i++ ){
        data.push({x: randVal(), y: randVal()});
    }

    return data;
}

export const dataSets = (state = [], action) => {
    switch(action.type) {
        case ADD_DATA_SET:
            const len = state.length;
            return [...state, {
                index: len,
                label: `SET ${len}`,
                color: DEFAULT_COLOR_LIST[len],
                data: randomData()
        }];
        case SET_DATA_SETS:
            return action.dataSets;
        case SET_PURE_DATA:
            let index = 0;
            return action.dataList.map( (data) => ({
                index: index,
                label: `SET ${index}`,
                color: DEFAULT_COLOR_LIST[index++],
                data
            }));
        default:
            return state;
    }
};