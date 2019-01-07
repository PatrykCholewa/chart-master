import {connect} from "react-redux";
import MyDataSheet from "../components/MyDataSheet";

const mapStateToProps = (state, ownProps) => ({
    dataSets: state.dataSheet.present.dataSets,
    type: state.dataSheet.present.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDataSheet);