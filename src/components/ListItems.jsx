import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
	margin: 0;
	padding: 0;
	background-color: brown;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
const Img = styled.img`
	object-fit: cover;
	height: 450px;
	aspect-ratio: auto;
`;

const H3 = styled.h3`
	margin: 0;
	color: #000;
`;

const Span = styled.span`
	color: #000;
	opacity: 0.5;
`;

const Link = styled(NavLink)`
	text-decoration: none;
`;

class ListItems extends React.Component {
	getId = () => {
		this.props.onShowFilmInfo(this.props.movie.filmId);
	};
	render() {
		return (
			<>
				<Link to={`/film/${this.props.movie.filmId}`}onClick={this.getId}>
					<Item>
						<Img src={this.props.movie.posterUrl} width={300} height={450} />
						<H3>{this.props.movie.nameRu}</H3>
						<Span>
							{this.props.movie.year}, {this.props.movie.genres[0].genre}
						</Span>
					</Item>
				</Link>
			</>
		);
	}
}

export default ListItems;
