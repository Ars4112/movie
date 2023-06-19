import React from "react";
import styled from "styled-components";
import ListItems from "./ListItems";



export const Container = styled.div`
	max-width: 1360px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	flex-grow: 1;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
	grid-auto-rows: auto;
	gap: 30px;
	justify-content: center;
`;

class Catalog extends React.Component {
	render() {
		return (
			<Container>
				<List>
					
					{this.props.setMoviesList.map((i)=> {
                     return <ListItems 
                      key={i.filmId} 
                      movie={i}
					  onShowFilmInfo={this.props.onShowFilmInfo}/>
                    })}
					
				</List>
			</Container>
		);
	}
}

export default Catalog;
