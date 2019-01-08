import React, { Component } from 'react';
import ExampleChart from "./ExampleChart";
import VisibleDataSheet from "../containers/VisibleDataSheet";
import VisibleFileReaderBtn from "../containers/VisibleFileReaderBtn";

class App extends Component {
    render() {
        return (
            <div>
                <VisibleDataSheet/>
                <ExampleChart/>
                <VisibleFileReaderBtn/>
            </div>
        );
    }
}

export default App;
