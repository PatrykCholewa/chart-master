import React, { Component } from 'react';
import VisibleDataSheet from "../containers/VisibleDataSheet";
import VisibleFileReaderBtn from "../containers/VisibleFileReaderBtn";
import VisibleFileDownloadLink from "../containers/VisibleFileDownloadLink";
import VisibleChart from "../containers/VisibleChart";

class App extends Component {
    render() {
        return (
            <div>
                <VisibleDataSheet/>
                <VisibleChart/>
                <VisibleFileReaderBtn/>
                <VisibleFileDownloadLink/>
            </div>
        );
    }
}

export default App;
