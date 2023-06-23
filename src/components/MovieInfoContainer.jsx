import React from "react";
import { connect } from "react-redux";
import MovieInfo from "./MovieInfo";
import { withRouter } from "react-router-dom";
import { showFilmInfoAC, getStaffAC } from "../redux/MoviesListReducer";

class MovieInfoComponent extends React.Component {
	componentDidMount() {
		const { match } = this.props;
		const { id } = match.params;
		// console.log({ id });
		fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ id }`, {
			method: "GET",
			headers: {
				"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
				"Content-Type": "application/json",
				"vary": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers" 
			},
		})
			.then((res) => res.json())
			.then((json) => {
				// console.log(json);
				return this.props.getShowFilmInfo(json);
			})
			.catch((err) => console.log(err));

			fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${ id }`, {
			method: "GET",
			headers: {
				"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
				"Content-Type": "application/json",
				"vary": "Origin,Access-Control-Request-Method,Access-Control-Request-Headers" 
			},
		})
			.then((res) => res.json())
			.then((json) => {
				// console.log(json);
				return this.props.getStaffAC(json);
			})
			.catch((err) => console.log(err));
	}
	render() {
		return <MovieInfo filmInfo={this.props.filmInfo} getStaff={this.props.getStaff} />;
	}
}

const mapStateToProps = (state) => {
	return {
		getStaff: state.moviesList.getStaff,
		filmInfo: state.moviesList.filmInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getShowFilmInfo: (info) => {
			dispatch(showFilmInfoAC(info));
		},
		getStaffAC: (id) => {
			dispatch(getStaffAC(id));
		},
	};
};

const MovieInfoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieInfoComponent);

export default withRouter(MovieInfoContainer);
