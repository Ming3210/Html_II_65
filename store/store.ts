import B2 from "./reducers/B2";
import B1 from "./reducers/B1";
import B3 from "./reducers/B3";
import B4 from "./reducers/B4";
import B5 from "./reducers/B5";
import B6 from "./reducers/B6";

import B7 from "./reducers/B7";
import { combineReducers, createStore } from "redux"

const rootReducer = combineReducers({
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7
})
const store = createStore(rootReducer)

export default store;