import {connect} from "react-redux";
import {deepCopyObject} from "../utils/utils";
import {setChartTitle} from "../actions/ChartActions";
import AbstractChart from "../components/AbstractChart";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSets.present,
    chartParams: deepCopyObject(state.chart.present)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setTitle: newTitle => dispatch(setChartTitle(newTitle))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbstractChart);