import connect from "react-redux/es/connect/connect";
import {
    VERTICAL_BAR_CHART,
    LINE_CHART,
    SCATTER_CHART,
    PIE_CHART,
    AREA_CHART,
    HORIZONTAL_BAR_CHART
} from "../constants/ChartType";
import SetChartTypeMenu from "../components/SetChartTypeMenu";
import {setChartType} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    currentChartType: state.chart.present.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLineChart: () => dispatch(setChartType(LINE_CHART)),
    setHorizontalBarChart: () => dispatch(setChartType(HORIZONTAL_BAR_CHART)),
    setVerticalBarChart: () => dispatch(setChartType(VERTICAL_BAR_CHART)),
    setAreaChart: () => dispatch(setChartType(AREA_CHART)),
    setScatterChart: () => dispatch(setChartType(SCATTER_CHART)),
    setPieChart: () => dispatch(setChartType(PIE_CHART))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetChartTypeMenu);