// meeting place for all reducers

import { combineReducers } from "redux";
import video_reducer from "./video_reducers";
import error_reducer from "./error_reducers";
import message_reducer from "./message_reducers";
import auth_reducer from "./auth_reducers";

export default combineReducers({
  video_reducer,
  error_reducer,
  message_reducer,
  auth_reducer,
});
