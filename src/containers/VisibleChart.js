import AbstractChart from "../components/AbstractChart";
import {connect} from "react-redux";
import {addColor} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    colorList: state.colorList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(addColor(undefined))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbstractChart);