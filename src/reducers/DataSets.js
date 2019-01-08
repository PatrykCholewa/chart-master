import {
    ADD_DATA_SET,
    SET_NEW_DATA_BY_DATA_SET_INDEX,
    SET_DATA_SETS,
    SET_LABEL_BY_INDEX,
    SET_PURE_DATA
} from "../constants/ChartActionTypes";
import {DEFAULT_COLOR_LIST} from "../constants/DefaultColorList";

const initialState = [
    {
        index: 0,
        label: "SET 0",
        color: "red",
        data: [
            {
                x: "1",
                y: "2",
                valid: true
            },
            {
                x: "2",
                y: "3",
                valid: true
            }
        ]
    },
    {
        index: 1,
        label: "SET 1",
        color: "blue",
        data: [
            {
                x: "0",
                y: "-1",
                valid: true
            },
            {
                x: "3",
                y: "3",
                valid: true
            }
        ]
    }
];

function randomData() {
    const randLen = () => Math.random() * 10 % 5;
    const randVal = () => (Math.random() * 10 - 5).toPrecision(4);
    let data = [];

    for( let i = 0 ; i < randLen() % 5 ; i++ ){
        data.push({x: randVal(), y: randVal()});
    }

    return data;
}

export const dataSets = (state = initialState, action) => {
    switch(action.type) {
        case SET_LABEL_BY_INDEX:
            return state.map( (set, index) => {
                return index === action.dataSetIndex
                    ? {...set, label: action.newLabel}
                    : set;
            });
        case SET_NEW_DATA_BY_DATA_SET_INDEX:
            return !action.newData.valid
                ? state
                : state.map( (set, index) => {
                    if( index !== action.dataSetIndex ){
                       return set;
                    }

                    return {...set, data: set.data.map( (point, index) => {
                            return index === action.dataIndex ? action.newData : point;
                    })};
            });
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