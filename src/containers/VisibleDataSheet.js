import {connect} from "react-redux";
import MyDataSheet from "../components/MyDataSheet";

const mapStateToProps = (state, ownProps) => ({
    dataXY: state.dataSets.present.map( set => set.data.map( point => ([point.x, point.y]) )),
    labelsY: state.dataSets.present.map( set => set.label )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDataSheet);