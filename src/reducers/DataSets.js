import {
    SET_NEW_DATA_BY_DATA_SET_INDEX,
    SET_LABEL_BY_INDEX,
    SET_PURE_DATA, SET_COLOR_BY_INDEX, ADD_NEW_EMPTY_DATA_SET, ADD_NEW_EMPTY_DATA_TO_EVERY_SET
} from "../constants/ChartActionTypes";
import {DEFAULT_COLOR_LIST} from "../constants/DefaultColorList";
import {deepCopyObject} from "../utils/utils";

const initialState = [
    {
        index: 0,
        label: "SET 0",
        color: DEFAULT_COLOR_LIST[0],
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
            },
            {
                x: "4",
                y: "4",
                valid: true
            },
            {
                x: "3",
                y: "6",
                valid: true
            }
        ]
    },
    {
        index: 1,
        label: "SET 1",
        color: DEFAULT_COLOR_LIST[1],
        data: [
            {
                x: "2",
                y: "4",
                valid: true
            },
            {
                x: "3",
                y: "3",
                valid: true
            },
            {
                x: "1",
                y: "1",
                valid: true
            },
            {
                x: "4",
                y: "8",
                valid: true
            },
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
        case ADD_NEW_EMPTY_DATA_SET:
            const newIndex = newState.length;
            const newData = newIndex === 0
                ? []
                : newState[0].data.map(()=> ({
                    x: "",
                    y: "",
                    valid: true
                }));
            newState.push({
                index: newIndex,
                label: `SET ${newIndex}`,
                color: DEFAULT_COLOR_LIST[newIndex],
                data: newData
            });
            return newState;
        case ADD_NEW_EMPTY_DATA_TO_EVERY_SET:
            const newDataPrototype = {
                    x: "",
                    y: "",
                    valid: true
            };
            newState.forEach( set => set.data.push(deepCopyObject(newDataPrototype)) );
            return newState;
        case SET_NEW_DATA_BY_DATA_SET_INDEX:
            newState[action.dataSetIndex].data[action.dataIndex] = deepCopyObject(action.newData);
            return newState;
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