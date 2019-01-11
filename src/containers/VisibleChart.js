import {connect} from "react-redux";
import {ActionCreators} from "redux-undo";
import {deepCopyObject} from "../utils/utils";
import {setChartTitle} from "../actions/ChartActions";
import AbstractChart from "../components/exampleCharts/AbstractChart";
import MyLineChart from "../components/charts/MyLineChart";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSets.present,
    chartParams: deepCopyObject(state.chart.present)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setTitle: newTitle => dispatch(setChartTitle(newTitle)),
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbstractChart);