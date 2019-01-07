import React, { Component } from 'react';
import ExampleChart from "./ExampleChart";
import VisibleDataSheet from "../containers/VisibleDataSheet";

class App extends Component {
    render() {
        return (
            <div>
                <VisibleDataSheet/>
                <ExampleChart/>
            </div>
        );
    }
}

export default App;
