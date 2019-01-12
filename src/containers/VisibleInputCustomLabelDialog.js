import {connect} from "react-redux";
import {setDataLabel} from "../actions/ChartActions";
import MyInputCustomLabelDialog from "../components/MyInputCustomLabelDialog";

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setDataLabel: (newLabel, dataSetIndex, dataIndex) => dispatch(setDataLabel(newLabel, dataSetIndex, dataIndex))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyInputCustomLabelDialog);