import React from "react";
import { connect } from "react-redux";
import MovieInfo from "./MovieInfo";

class MovieInfoComponent extends React.Component {
    
	render() {
        console.log(this.props.filmInfo)
		return (
        <MovieInfo filmInfo={this.props.filmInfo} />
        );
	}
}

const mapStateToProps = (state) => {
	return {
		
        filmInfo: state.moviesList.filmInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

const MovieInfoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieInfoComponent);

export default MovieInfoContainer;
