import {connect} from "react-redux";
import {ActionCreators} from "redux-undo";
import Button from "@material-ui/core/Button/Button";

const mapStateToProps = (state, ownProps) => ({
    disabled: state.dataSets.future.length === 0
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(ActionCreators.redo())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);