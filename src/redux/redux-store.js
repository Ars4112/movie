import { createStore, combineReducers } from "redux";
import MoviesListReducer from "./MoviesListReducer";

const reducers = combineReducers({
	moviesList: MoviesListReducer,
});

const store = createStore(reducers);

window.store = store;

export default store;
