import {ADD_DATA_SET} from "../constants/ChartActionTypes";
import {DEFAULT_COLOR_LIST} from "../constants/DefaultColorList";

function randomData() {
    const rand10 = () => Math.random() * 10;
    let data = [];

    for( let i = 0 ; i < rand10() % 5 ; i++ ){
        data.push({x: rand10()-5, y: rand10()-5});
    }

    return data;
}

export const dataSets = (state = [], action) => {
    switch(action.type) {
        case ADD_DATA_SET:
            const len = state.length;
            return [...state, {
                label: `SET ${len}`,
                color: DEFAULT_COLOR_LIST[len],
                data: randomData()
        }];
        default:
            return state;
    }
};