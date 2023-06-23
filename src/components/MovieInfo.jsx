import React from "react";
import { Container } from "./Catalog";
import styled from "styled-components";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: max-content 1fr auto;
	grid-template-rows: auto auto auto;
	grid-template-areas:
		"B  A A A F F F "
		"B  D D D C C C "
		"B  D D D C C C "
		"B  D D D C C C "
		"B  D D D C C C ";
	gap: 20px;
	width: 100%;
`;

const Img = styled.img`
	object-fit: cover;
	display: block;
	/* width: 100%; */
	grid-area: B;
`;

const Title = styled.h2`
	font-size: 20px;
	font-weight: 700;
	line-height: 22px;
	letter-spacing: -0.5px;
	margin: 0;
	font-family: Helvetica, sans-serif;
	grid-area: A;
	/* background-color: aliceblue; */
	@media (max-width: 768px) {
		font-size: 15px;
		/* background-color: #5caef5; */
	}
`;

const ActorsList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	/* background-color: aliceblue; */
	/* width: 100%; */
	grid-area: C;
`;
const Grage = styled.div`
	font-size: 20px;
	font-weight: 700;
	line-height: 22px;
	letter-spacing: -0.5px;

	font-family: Helvetica, sans-serif;
	grid-area: F;
	/* background-color: aliceblue; */
	display: flex;
	align-items: center;
	justify-content: center;
`;
const About = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	grid-area: D;
	/* background-color: aliceblue; */
`;

const AboutItem = styled.li`
	display: grid;
	grid-template-columns: 170px auto;
	grid-auto-rows: min-content;
	gap: 20px;
`;

class MovieInfo extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.getStaff = this.props.getStaff;
	// 	this.filmInfo = this.props.filmInfo;
	// 	// this.arrayActors = this.arrayActors.bind(this)
	// }

	arrayActors = () => {
		return this.props.getStaff
			.filter((i) => i.professionKey === "ACTOR")
			.map((i) => {
				return (
					<li key={i.staffId}>
						<span>{i.nameRu === "" ? i.nameEn : i.nameRu}</span>
					</li>
				);
			});
	};

	arrayProduser = () => {
		return this.props.getStaff
			.filter((i) => i.professionKey === "PRODUCER")
			.map((i) => (i.nameRu === "" ? i.nameEn : i.nameRu))
			.join(", ");
	};

	arrayDirector = ()=> this.props.getStaff.filter((i) => i.professionKey === "DIRECTOR").map((i) => (i.nameRu === "" ? i.nameEn : i.nameRu))
	.join(", ");

	arrayCountry = ()=> this.props.filmInfo.countries.map((i) => i.country).join(", ");

	render() {
		console.log(
			this.props.getStaff.filter((i) => i.professionKey === "DIRECTOR")
		);
		console.log(this.props.filmInfo);
		return (
			<Container>
				<GridContainer>
					<Img
						src={this.props.filmInfo.posterUrlPreview}
						width={200}
						height={300}
					/>
					<Title>{`${this.props.filmInfo.nameRu} (${this.props.filmInfo.year})`}</Title>
					<Grage>{this.props.filmInfo.ratingKinopoisk}</Grage>
					<ActorsList>
						{this.arrayActors()}
						{this.arrayActors().length}
					</ActorsList>
					
					<About>
						<h3>О фильме</h3>
						<AboutItem>
							<span>Год производства</span>
							<span>{this.props.filmInfo.year}</span>
						</AboutItem>
						<AboutItem>
							<span>Страна</span>
							<span>
								{this.arrayCountry()}
							</span>
						</AboutItem>
						<AboutItem>
							<span>Жанр</span>
							 <span>{this.props.filmInfo.genres.genre}</span> 
						</AboutItem>
						<AboutItem>
							<span>Режиссер</span>
							<span>
								{this.arrayDirector()}
							</span>
						</AboutItem>
						<AboutItem>
							<span>продюсеры</span>
							<span>{this.arrayProduser()}</span>
						</AboutItem>
						<AboutItem>
							<span>продюсеры</span>
							<span>{this.arrayProduser()}</span>
						</AboutItem>
					</About>
				</GridContainer>
			</Container>
		);
	}
}

export default MovieInfo;
