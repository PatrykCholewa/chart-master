import React, { Component } from 'react';
import ExampleChart from "./ExampleChart";
import ExampleDataSheet from "./ExampleDataSheet";
import FileReaderBtn from "./FileReaderBtn";

class App extends Component {
    render() {
        return (
            <div>
                <ExampleDataSheet/>
                <ExampleChart/>
                <FileReaderBtn/>
            </div>
        );
    }
}

export default App;
