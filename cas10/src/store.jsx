import { configureStore } from "@reduxjs/toolkit"; // za kreiranje na prodavnicata/store
import logger from "redux-logger"; // fiskalen aparat
import SayHelloReducer from "./reducers/SayHelloReducer"; // vraboteniot

const reducer = {
  //sojuz na rabotnici
  SayHelloReducer: SayHelloReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
