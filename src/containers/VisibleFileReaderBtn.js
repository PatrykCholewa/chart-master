import {connect} from "react-redux";
import FileReaderBtn from "../components/FileReaderBtn";
import {setPureData} from "../actions/ChartActions";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSheet.present.dataSets
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setPureData: (dataSet) => dispatch(setPureData(dataSet)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FileReaderBtn);