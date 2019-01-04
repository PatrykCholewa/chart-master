import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import {dataSets} from "./DataSets";

const undoConfig = {limit: 10};

export default combineReducers({
    dataSets: undoable(dataSets, undoConfig)
});