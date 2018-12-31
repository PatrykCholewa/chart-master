import React, { Component } from 'react';
import ExampleChart from "./ExampleChart";
import ExampleDataSheet from "./ExampleDataSheet";

class App extends Component {
    render() {
        return (
            <div>
                <ExampleDataSheet/>
                <ExampleChart/>
            </div>
        );
    }
}

export default App;
