import React, { Component } from 'react';
import VisibleDataSheet from "../containers/VisibleDataSheet";
import VisibleFileReaderBtn from "../containers/VisibleFileReaderBtn";
import VisibleFileDownloadLink from "../containers/VisibleFileDownloadLink";
import VisibleChart from "../containers/VisibleChart";
import VisibleUndoButton from "../containers/VisibleUndoButton";
import VisibleRedoButton from "../containers/VisibleRedoButton";
import VisibleSetChartTypeMenu from "../containers/VisibleSetChartTypeMenu";

class App extends Component {
    render() {
        return (
            <div>
                <VisibleDataSheet/>
                <VisibleChart/>
                <VisibleUndoButton variant="contained" color="default">UNDO</VisibleUndoButton>
                <VisibleRedoButton variant="contained" color="default">REDO</VisibleRedoButton>
                <VisibleFileReaderBtn/>
                <VisibleFileDownloadLink/>
                <VisibleSetChartTypeMenu/>
            </div>
        );
    }
}

export default App;
