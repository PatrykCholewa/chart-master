import React, { Component } from 'react';
import VisibleDataSheet from "../containers/VisibleDataSheet";
import VisibleFileReaderBtn from "../containers/VisibleFileReaderBtn";
import VisibleFileDownloadLink from "../containers/VisibleFileDownloadLink";
import VisibleChart from "../containers/VisibleChart";
import VisibleUndoButton from "../containers/VisibleUndoButton";
import VisibleRedoButton from "../containers/VisibleRedoButton";
import VisibleSetChartTypeMenu from "../containers/VisibleSetChartTypeMenu";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

class App extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            CHART MASTER
                        </Typography>
                    </Toolbar>
                </AppBar>
                <aside>
                    <VisibleUndoButton variant="contained" color="default">UNDO</VisibleUndoButton>
                    <VisibleRedoButton variant="contained" color="default">REDO</VisibleRedoButton>
                    <VisibleFileReaderBtn/>
                    <VisibleFileDownloadLink/>
                    <VisibleSetChartTypeMenu/>
                </aside>
                <main>
                    <VisibleDataSheet/>
                    <VisibleChart/>
                </main>
            </div>
        );
    }
}

export default App;
