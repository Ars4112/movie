import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Item = styled.li`
	margin: 0;
	padding: 0;
	
	display: flex;
	flex-direction: column;
	gap: 10px;
	aspect-ratio: 200/300;
`;
const Img = styled.img`
	object-fit: cover;
	height: 238px;
	position: relative;
	&::before {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.3;
	}
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
	render() {
		return (
			<>
				<Link to={`/film/${this.props.movie.filmId}`}>
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
