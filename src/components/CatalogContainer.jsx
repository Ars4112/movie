import React from "react";
import { moviesListAC } from "../redux/MoviesListReducer";
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

	render() {
		return (
			<>
				<Catalog setMoviesList={this.props.setMoviesList}/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		setMoviesList: state.moviesList.setMoviesList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		moviesList: (list) => {
			dispatch(moviesListAC(list));
		},
	};
};

const CatalogContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CatalogApiComponent);

export default CatalogContainer;
