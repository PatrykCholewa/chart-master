import React, { Component } from 'react';
import VisibleDataSheet from "../containers/VisibleDataSheet";
import VisibleFileReaderBtn from "../containers/VisibleFileReaderBtn";
import VisibleFileDownloadLink from "../containers/VisibleFileDownloadLink";
import VisibleChart from "../containers/VisibleChart";
import VisibleUndoButton from "../containers/VisibleUndoButton";
import VisibleRedoButton from "../containers/VisibleRedoButton";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Grid from "@material-ui/core/Grid/Grid";
import ExampleVerticalBarChart from "./exampleCharts/ExampleVerticalBarChart";
import ExampleHorizontalBarChart from "./exampleCharts/ExampleHorizontalBarChart";
import ExampleAreaChart from "./exampleCharts/ExampleAreaChart";
import ExamplePieChart from "./exampleCharts/ExamplePieChart";
import ExampleLineChart from "./exampleCharts/ExampleLineChart";
import ExampleScatterChart from "./exampleCharts/ExampleScatterChart";

class Layout extends Component {
    render() {
        return (
            <div id="app-content">
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            CHART MASTER
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={16} className="under-topbar" justify="center" direction="row">
                        <Grid item xs={4}>
                        <aside>
                            <Grid container spacing={16} justify="center">
                                <Grid item container spacing={16} justify="center">
                                    <Grid item>
                                        <VisibleUndoButton variant="contained" color="default">UNDO</VisibleUndoButton>
                                    </Grid>
                                    <Grid item>
                                        <VisibleRedoButton variant="contained" color="default">REDO</VisibleRedoButton>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={16} justify="center">
                                    <Grid item>
                                        <VisibleFileReaderBtn/>
                                    </Grid>
                                    <Grid item>
                                        <VisibleFileDownloadLink/>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={16} justify="center">
                                    <Grid item>
                                        <ExampleVerticalBarChart onClick={ () => this.props.setVerticalBarChart() }/>
                                    </Grid>
                                    <Grid item>
                                        <ExampleHorizontalBarChart onClick={ () => this.props.setHorizontalBarChart() }/>
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={16} justify="center">
                                    <Grid item>
                                        <ExampleAreaChart onClick={ () => this.props.setAreaChart() } />
                                    </Grid>
                                    <Grid item>
                                        <ExamplePieChart onClick={ () => this.props.setPieChart() } />
                                    </Grid>
                                </Grid>
                                <Grid item container spacing={16} justify="center">
                                    <Grid item>
                                        <ExampleLineChart onClick={ () => this.props.setLineChart() } />
                                    </Grid>
                                    <Grid item>
                                        <ExampleScatterChart onClick={ () => this.props.setScatterChart() } />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </aside>
                    </Grid>
                    <Grid item xs={8}>
                        <main>
                            <Grid container spacing={8} justify="center" direction="column">
                                <Grid item>
                                    <VisibleChart/>

                                </Grid>
                                <Grid item>
                                    <VisibleDataSheet/>
                                </Grid>
                            </Grid>
                        </main>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Layout;
