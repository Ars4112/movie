import React from "react";
import { connect } from "react-redux";
import MovieInfo from "./MovieInfo";
import { withRouter } from "react-router-dom";
import {
	showFilmInfoAC,
	getStaffAC,
	similarFilmAC,
} from "../redux/MoviesListReducer";

class MovieInfoComponent extends React.Component {
	componentDidMount() {
		const { match } = this.props;
		const { id } = match.params;

		fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
			method: "GET",
			headers: {
				"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
				"Content-Type": "application/json",
				vary: "Origin,Access-Control-Request-Method,Access-Control-Request-Headers",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(11111);
				return this.props.getShowFilmInfo(json);
			})
			.catch((err) => console.log(err));

		fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`, {
			method: "GET",
			headers: {
				"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
				"Content-Type": "application/json",
				vary: "Origin,Access-Control-Request-Method,Access-Control-Request-Headers",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(22222);
				return this.props.getStaffAC(json);
			})
			.catch((err) => console.log(err));

		fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
			method: "GET",
			headers: {
				"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
				"Content-Type": "application/json",
				vary: "Origin,Access-Control-Request-Method,Access-Control-Request-Headers",
			},
		})
			.then((res) => res.json())
			.then((json) => {
				console.log(33333);
				return this.props.showSimilarFilm(json);
			})
			.catch((err) => console.log(err));
	}
	render() {
		console.log(44444);
		if (this.props.getStaff.length && this.props.filmInfo) {
			return (
				<MovieInfo
					filmInfo={this.props.filmInfo}
					getStaff={this.props.getStaff}
					similarFilm={this.props.similarFilm}
				/>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		getStaff: state.moviesList.getStaff,
		filmInfo: state.moviesList.filmInfo,
		similarFilm: state.moviesList.similarFilm,
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
		showSimilarFilm: (list) => {
			dispatch(similarFilmAC(list));
		},
	};
};

const MovieInfoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieInfoComponent);

export default withRouter(MovieInfoContainer);
