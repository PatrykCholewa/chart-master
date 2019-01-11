import connect from "react-redux/es/connect/connect";
import {BAR_CHART, LINE_CHART, PIE_CHART} from "../constants/ChartType";
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
    setPieChart: () => dispatch(setChartType(PIE_CHART))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetChartTypeMenu);