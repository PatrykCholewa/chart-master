import {connect} from "react-redux";
import MyDataSheet from "../components/MyDataSheet";
import {setLabelByIndex} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSheet.present.dataSets,
    type: state.dataSheet.present.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLabelByIndex: (newLabel, dataSetIndex) => dispatch(setLabelByIndex(newLabel, dataSetIndex))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDataSheet);