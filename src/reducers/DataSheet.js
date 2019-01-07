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
        default:
            return state;
    }
};