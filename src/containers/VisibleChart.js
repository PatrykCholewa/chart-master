import MyBarChart from "../components/MyBarChart";
import {connect} from "react-redux";
import {addDataSet} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(addDataSet(undefined))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBarChart);