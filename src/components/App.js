import React, { Component } from 'react';
import VisibleDataSheet from "../containers/VisibleDataSheet";
import VisibleFileReaderBtn from "../containers/VisibleFileReaderBtn";
import VisibleFileDownloadLink from "../containers/VisibleFileDownloadLink";
import VisibleChart from "../containers/VisibleChart";
import VisibleUndoButton from "../containers/VisibleUndoButton";
import VisibleRedoButton from "../containers/VisibleRedoButton";
import ExampleVerticalBarChart from "./exampleCharts/ExampleVerticalBarChart";
import ExampleLineChart from "./exampleCharts/ExampleLineChart";
import ExampleScatterChart from "./exampleCharts/ExampleScatterChart";
import ExamplePieChart from "./exampleCharts/ExamplePieChart";
import ExampleAreaChart from "./exampleCharts/ExampleAreaChart";
import ExampleHorizontalBarChart from "./exampleCharts/ExampleHorizontalBarChart";

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
                <ExampleVerticalBarChart/>
                <ExampleHorizontalBarChart/>
                <ExampleAreaChart/>
                <ExamplePieChart/>
                <ExampleLineChart/>
                <ExampleScatterChart/>
            </div>
        );
    }
}

export default App;
