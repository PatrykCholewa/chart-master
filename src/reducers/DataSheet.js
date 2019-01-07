import {SET_LABEL_BY_INDEX} from "../constants/ChartActionTypes";

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
                    x: "INVALID",
                    y: "3",
                    valid: false
                }
            ]
        }
    ]
};

export const dataSheet = (state = initialState, action) => {
    switch(action.type) {
        case SET_LABEL_BY_INDEX:
            const newState = {...state};
            newState.dataSets = state.dataSets.map( set => set );
            newState.dataSets[action.dataSetIndex].label = action.newLabel;
            return newState;
        default:
            return state;
    }
};