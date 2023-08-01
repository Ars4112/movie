import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppContainer from "./components/AppContainer";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Router>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</Router>
);

