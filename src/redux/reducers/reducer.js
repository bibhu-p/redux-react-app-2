import crudOp from "./crud";
import { editOp } from "./crud";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
    crudOp,
    editOp,
    // deleteOp
});

export default rootReducer;