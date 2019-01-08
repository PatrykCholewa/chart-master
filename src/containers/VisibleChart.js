import MyBarChart from "../components/MyBarChart";
import {connect} from "react-redux";
import {ActionCreators} from "redux-undo";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSets.present
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBarChart);