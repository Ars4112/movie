import React from "react";
import { moviesListAC, showFilmInfoAC, getIdAC } from "../redux/MoviesListReducer";
import { connect } from "react-redux";
import Catalog from "./Catalog";

class CatalogApiComponent extends React.Component {
	componentDidMount() {
		fetch(
			"https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",
			{
				method: "GET",
				headers: {
					"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
					"Content-Type": "application/json",
				},
			}
		)
			.then((res) => res.json())
			.then((json) => {
				
				return this.props.moviesList(json.films)
				
			})
			.catch((err) => console.log(err));
	}

	onShowFilmInfo = (id)=> {
		
		fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
			{
				method: "GET",
				headers: {
					"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
					"Content-Type": "application/json",
				},
			}
		)
			.then((res) => res.json())
			.then((json) => {
				// console.log(json);
			   return	this.props.getShowFilmInfo(json)
			})
			.catch((err) => console.log(err));

			this.props.onGetId(id)
	}

	render() {
		return (
			<>
				<Catalog setMoviesList={this.props.setMoviesList} onShowFilmInfo={this.onShowFilmInfo}/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		setMoviesList: state.moviesList.setMoviesList,
		getId: state.moviesList.getId
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		moviesList: (list) => {
			dispatch(moviesListAC(list));
		},
		getShowFilmInfo: (info)=> {
			dispatch(showFilmInfoAC(info));
		},
		onGetId: (id)=> {
			dispatch(getIdAC(id));
		}
	};
};

const CatalogContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CatalogApiComponent);

export default CatalogContainer;
