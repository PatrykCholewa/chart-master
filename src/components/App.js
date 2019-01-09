import React, { Component } from 'react';
import ExampleChart from "./ExampleChart";
import VisibleDataSheet from "../containers/VisibleDataSheet";
import VisibleFileReaderBtn from "../containers/VisibleFileReaderBtn";
import VisibleFileDownloadLink from "../containers/VisibleFileDownloadLink";

class App extends Component {
    render() {
        return (
            <div>
                <VisibleDataSheet/>
                <ExampleChart/>
                <VisibleFileReaderBtn/>
                <VisibleFileDownloadLink/>
            </div>
        );
    }
}

export default App;
