import { combineReducers } from "redux";
import productReducer from "../../../redux/actions/reducers/Reducer";
import newProductReducer from "./Reducer";
import userReducer from "../../../redux/actions/users/UserReducer";


const RootReducer = combineReducers({
    product: productReducer,
    newProduct: newProductReducer,
    user:userReducer
})

export default RootReducer