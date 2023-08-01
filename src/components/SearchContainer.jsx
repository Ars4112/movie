import React, { useEffect } from "react";
import { connect } from "react-redux";
import Search from "./Search";
import { searchAC, inputSearchValueAC, moviesListAC } from "../redux/MoviesListReducer";

const SearchContainer = (props) => {
	useEffect(() => {
		fetch(
			`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${props.inputValue}`,
			{
				method: "GET",
				headers: {
					"X-API-KEY": "14f8356d-c334-4cb4-8355-a9c781390273",
					"Content-Type": "application/json",
					vary: "Origin,Access-Control-Request-Method,Access-Control-Request-Headers",
				},
			}
		)
			.then((res) => res.json())
			.then((json) => {
				// console.log(json.films);
				 return json.films.length && props.moviesList(json.films);
				
			})
			.catch((err) => console.log(err));
	});
	return (
		<>
			<Search inputSearchValue={props.inputSearchValue} />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		inputValue: state.moviesList.key,
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		search: (list) => {
			dispatch(searchAC(list));
		},
		inputSearchValue: (key) => {
			dispatch(inputSearchValueAC(key));
		},
		moviesList: (list) => {
			dispatch(moviesListAC(list));
		},
	};
};

const SearchComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchContainer);

export default SearchComponent;
