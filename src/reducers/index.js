import {combineReducers} from "redux";
import videosArrayReducer from "./videosArray";

const allReducers = combineReducers({
    videos : videosArrayReducer
})

export default allReducers;