import crudOp from "./crud";
import { editOp } from "./crud";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
    crudOp,
    editOp,
});

export default rootReducer;