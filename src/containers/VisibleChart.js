import AbstractChart from "../components/AbstractChart";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    chartType: ownProps.chartType,
    data: ownProps.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbstractChart);