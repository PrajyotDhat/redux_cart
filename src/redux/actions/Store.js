import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
// import productReducer from "./reducers/Reducer";
import RootReducer from "../../redux_t/actions/reducers/RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";



const Store=createStore(RootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default Store