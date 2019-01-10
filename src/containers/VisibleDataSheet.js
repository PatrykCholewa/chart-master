import {connect} from "react-redux";
import MyDataSheet from "../components/MyDataSheet";
import {addNewEmptyDataSet, setColorByIndex, setLabelByIndex, setNewDataByDataSetIndex} from "../actions/ChartActions";
import {deepCopyObject} from "../utils/utils";

const mapStateToProps = (state, ownProps) => ({
    dataSets: deepCopyObject(state.dataSets.present),
    type: state.dataSheet.present.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLabelByIndex: (newLabel, dataSetIndex) => dispatch(setLabelByIndex(newLabel, dataSetIndex)),
    setColorByIndex: (newColor, dataSetIndex) => dispatch(setColorByIndex(newColor, dataSetIndex)),
    addNewEmptyDataSet: () => dispatch(addNewEmptyDataSet()),
    addNewDataByDataSetIndex: (newData, dataSetIndex, dataIndex) => dispatch(setNewDataByDataSetIndex(newData, dataSetIndex, dataIndex))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDataSheet);