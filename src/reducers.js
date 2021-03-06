import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

function createReducer(extraReducerObjects = {}) {
  // console.log(extraReducerObjects);
  return combineReducers({
    form: formReducer,
    ...extraReducerObjects
  });
}
const rootReducer = combineReducers({
  form: formReducer
});
export default rootReducer;
