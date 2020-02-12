import { combineReducers } from "redux";
import userReducer from "./userReducer.js/userReducer"
import setMeeting from "./setmeeting/setmeeting"
import Financial_data from "./financialReducer/financialReducer"
import detailsReducer from "./detailsReducer/detailsReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

   
const Reducers = combineReducers({
userReducer,
detailsReducer,
setMeeting,
Financial_data
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["Financial_data"]
  }

export default  persistReducer(persistConfig, Reducers);
