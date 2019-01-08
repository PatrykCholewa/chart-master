import {SET_NEW_DATA_BY_DATA_SET_INDEX, SET_LABEL_BY_INDEX} from "../constants/ChartActionTypes";

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
    const newState = {...state};
    switch(action.type) {
        case SET_LABEL_BY_INDEX:
            newState.dataSets = state.dataSets.map( set => set );
            newState.dataSets[action.dataSetIndex].label = action.newLabel;
            return newState;
        case SET_NEW_DATA_BY_DATA_SET_INDEX:
            newState.dataSets = state.dataSets.map( (set, index) => {
                if( index !== action.dataSetIndex ){
                    return set;
                }

                return {...set, data: set.data.map( (point, index) => {
                        return index === action.dataIndex ? action.newData : point;
                })};
            });
            return newState;
        default:
            return state;
    }
};