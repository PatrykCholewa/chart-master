import MyBarChart from "../components/MyBarChart";
import {connect} from "react-redux";
import {addColor} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    labelList: ownProps.labelList,
    colorList: state.colorList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(addColor(undefined))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBarChart);