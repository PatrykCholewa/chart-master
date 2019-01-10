import {connect} from "react-redux";
import MyDataSheet from "../components/MyDataSheet";
import {
    addNewEmptyDataSet,
    addNewEmptyDataToEverySet,
    setColorByIndex,
    setLabelByIndex,
    setNewDataByDataSetIndex
} from "../actions/ChartActions";
import {deepCopyObject} from "../utils/utils";

const mapStateToProps = (state, ownProps) => ({
    dataSets: deepCopyObject(state.dataSets.present),
    type: state.dataSheet.present.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setLabelByIndex: (newLabel, dataSetIndex) => dispatch(setLabelByIndex(newLabel, dataSetIndex)),
    setColorByIndex: (newColor, dataSetIndex) => dispatch(setColorByIndex(newColor, dataSetIndex)),
    addNewEmptyDataSet: () => dispatch(addNewEmptyDataSet()),
    addNewEmptyDataToEverySet: () => dispatch(addNewEmptyDataToEverySet()),
    addNewDataByDataSetIndex: (newData, dataSetIndex, dataIndex) => dispatch(setNewDataByDataSetIndex(newData, dataSetIndex, dataIndex))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDataSheet);