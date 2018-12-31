import AbstractChart from "../components/AbstractChart";
import {connect} from "react-redux";
import {setColorList} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    colorList: state.colorList
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setColorList(["blue"]))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbstractChart);