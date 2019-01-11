import connect from "react-redux/es/connect/connect";
import {BAR_CHART, LINE_CHART} from "../constants/ChartType";
import SetChartTypeMenu from "../components/SetChartTypeMenu";
import {setChartType} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    currentChartType: state.chart.present.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLineChart: () => dispatch(setChartType(LINE_CHART)),
    setHorizontalBarChart: () => console.log("NOT SUPPORTED"),
    setVerticalBarChart: () => dispatch(setChartType(BAR_CHART)),
    setAreaChart: () => console.log("NOT SUPPORTED"),
    setScatterChart: () => console.log("NOT SUPPORTED"),
    setPieChart: () => console.log("NOT SUPPORTED")
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetChartTypeMenu);