import * as React from "react";
import ExampleVerticalBarChart from "./exampleCharts/ExampleVerticalBarChart";
import ExampleHorizontalBarChart from "./exampleCharts/ExampleHorizontalBarChart";
import ExampleAreaChart from "./exampleCharts/ExampleAreaChart";
import ExamplePieChart from "./exampleCharts/ExamplePieChart";
import ExampleLineChart from "./exampleCharts/ExampleLineChart";
import ExampleScatterChart from "./exampleCharts/ExampleScatterChart";

class SetChartTypeMenu extends React.Component {

    render() {
        return (
            <div>
                <ExampleVerticalBarChart onClick={ () => this.props.setVerticalBarChart() }/>
                <ExampleHorizontalBarChart onClick={ () => this.props.setHorizontalBarChart() }/>
                <ExampleAreaChart onClick={ () => this.props.setAreaChart() } />
                <ExamplePieChart onClick={ () => this.props.setPieChart() } />
                <ExampleLineChart onClick={ () => this.props.setLineChart() } />
                <ExampleScatterChart onClick={ () => this.props.setScatterChart() } />
            </div>
        );
    }

}

export default SetChartTypeMenu;