import {
    ADD_DATA_SET,
    SET_NEW_DATA_BY_DATA_SET_INDEX,
    SET_DATA_SETS,
    SET_LABEL_BY_INDEX,
    SET_PURE_DATA, SET_COLOR_BY_INDEX
} from "../constants/ChartActionTypes";
import {DEFAULT_COLOR_LIST} from "../constants/DefaultColorList";
import {deepCopyObject} from "../utils/utils";

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

export const dataSets = (state = initialState, action) => {
    let newState = deepCopyObject(state);
    switch(action.type) {
        case SET_LABEL_BY_INDEX:
            newState[action.dataSetIndex].label = action.newLabel;
            return newState;
        case SET_COLOR_BY_INDEX:
            newState[action.dataSetIndex].color = action.newColor;
            return newState;
        case SET_NEW_DATA_BY_DATA_SET_INDEX:
            newState[action.dataSetIndex].data[action.dataIndex] = deepCopyObject(action.newData);
            return newState;
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
        case ADD_DATA_SET:
            //NOT IMPLEMENTED YET
        default:
            return state;
    }
};