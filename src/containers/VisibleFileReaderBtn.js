import {connect} from "react-redux";
import FileReaderBtn from "../components/FileReaderBtn";
import {setDataSets} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSheet.present.dataSets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setDataSets: (dataSet) => dispatch(setDataSets(dataSet)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FileReaderBtn);