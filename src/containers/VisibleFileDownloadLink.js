import {connect} from "react-redux";
import FileDownloadLink from "../components/FileDownloadLink"
import {deepCopyObject} from "../utils/utils";

const mapStateToProps = (state, ownProps) => ({
    dataSets: deepCopyObject(state.dataSets.present)
});

export default connect(
    mapStateToProps
)(FileDownloadLink);