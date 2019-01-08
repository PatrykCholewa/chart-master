import {SET_NEW_DATA_BY_DATA_SET_INDEX, SET_LABEL_BY_INDEX} from "../constants/ChartActionTypes";
import {deepCopyObject} from "../utils/utils";

const initialState = {
    type: "HORIZONTAL",
    dataSets: [
        {
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
    ]
};

export const dataSheet = (state = initialState, action) => {
    const newState = deepCopyObject(state);
    switch(action.type) {
        case SET_LABEL_BY_INDEX:
            newState.dataSets = state.dataSets.map( set => set );
            newState.dataSets[action.dataSetIndex].label = action.newLabel;
            return newState;
        case SET_NEW_DATA_BY_DATA_SET_INDEX:
            try{
                newState.dataSets[action.dataSetIndex].data[action.dataIndex] = deepCopyObject(action.newData);
            } catch(err) {
                console.log(err);
            }

            return newState;
        default:
            return newState;
    }
};