import React from "react";
import { connect } from "react-redux";
import App from "../App";

class AppAPIComponent extends React.Component {
	render() {
		return (
			<>
            <App getId={this.props.getId}/>
            </>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		
		getId: state.moviesList.getId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppAPIComponent);

export default AppContainer;