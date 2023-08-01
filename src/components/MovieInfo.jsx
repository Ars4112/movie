import React from "react";
import { Container } from "./Catalog";
import styled from "styled-components";
import SliderSimilarFilm from "./SliderSimilarFilm";
// import PersonContainer from "./PersonContainer";
import Staff from "./Staff";

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
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas:
		" A F "
		" B B "
		" D D "
		" D D "
		" C C ";
	}
`;

const Img = styled.img`
	object-fit: cover;
	display: block;
	width: 200px;
	height: 300px;
	grid-area: B;

	@media (max-width: 768px) {
		width: 60%;
		height: auto;
		margin: 0 auto;
	}

	@media (max-width: 640px) {
		width: 100%;
		aspect-ratio: 200/300;
		
	}
`;

const Title = styled.h2`
	font-size: 20px;
	font-weight: 700;
	line-height: 22px;
	letter-spacing: -0.5px;
	margin: 0;
	font-family: Helvetica, sans-serif;
	grid-area: A;
	@media (max-width: 768px) {
		font-size: 25px;
	}
`;

const SubTitle = styled.h3`
	margin: 0;
`;

const ActorsList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	grid-area: C;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

const Grage = styled.div`
	font-size: 20px;
	font-weight: 700;
	line-height: 22px;
	letter-spacing: -0.5px;
	font-family: Helvetica, sans-serif;
	grid-area: F;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		justify-content: end;
	}
`;
const About = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	grid-area: D;
	display: flex;
	flex-direction: column;
	gap: 20px;

	
`;

const AboutItem = styled.li`
	display: grid;
	grid-template-columns: 170px auto;
	grid-auto-rows: min-content;
	gap: 20px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr 2fr;
	}
`;

const StaffList = styled.div`
	
	
	
`;

class MovieInfo extends React.Component {
	arrayStaff = (e) =>
		e === "ACTOR"
			? this.props.getStaff
					.filter((i) => i.professionKey === e)
					.map((i) => <Staff key={i.staffId} getStaff={i} />)
			: this.props.getStaff
					.filter((i) => i.professionKey === e).slice(0, 3)
					.map((i, index, arr) => <Staff key={i.staffId} getStaff={i} hasComma={arr.length-1 !== index}/>);
	
	
	arrayCountry = () =>
		this.props.filmInfo.countries.map((i) => i.country).join(", ");

	render() {
		// console.log("getStaff" ,this.props.getStaff);
		// console.log(this.props.getStaff);
		// console.log(this.props.filmInfo);
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
						{this.arrayStaff("ACTOR").slice(0, 10)}
						{this.arrayStaff("ACTOR").length}
					</ActorsList>

					<About>
						<SubTitle>О фильме</SubTitle>
						<AboutItem>
							<span>Год производства</span>
							<span>{this.props.filmInfo.year}</span>
						</AboutItem>
						<AboutItem>
							<span>Страна</span>
							<span>{this.arrayCountry()}</span>
						</AboutItem>
						<AboutItem>
							<span>Жанр</span>
							<span>
								{this.props.filmInfo.genres.map((i) => i.genre).join(", ")}
							</span>
						</AboutItem>
						{this.props.filmInfo.shortDescription === null ? null : (
							<AboutItem>
								<span>Краткое содержание</span>
								<span>{this.props.filmInfo.shortDescription}</span>
							</AboutItem>
						)}
						<AboutItem>
							<span>Режиссер</span>
							<StaffList>{this.arrayStaff("DIRECTOR")}</StaffList>
						</AboutItem>
						<AboutItem>
							<span>Продюсер</span>
							<StaffList>{this.arrayStaff("PRODUCER")}</StaffList>
						</AboutItem>
						<AboutItem>
							<span>Монтаж</span>
							<StaffList>{this.arrayStaff("EDITOR")}</StaffList>
						</AboutItem>
						<AboutItem>
							<span>Художник</span>
							<StaffList>{this.arrayStaff("DESIGN")}</StaffList>
						</AboutItem>
						<AboutItem>
							<span>Композитор</span>
							<StaffList>{this.arrayStaff("COMPOSER")}</StaffList>
						</AboutItem>
						<AboutItem>
							<span>Сценарий</span>
							<StaffList>{this.arrayStaff("WRITER")}</StaffList>
						</AboutItem>
					</About>
				</GridContainer>
				{this.props.similarFilm.items && (
					<SliderSimilarFilm similarFilm={this.props.similarFilm}/>
				)}
			</Container>
		);
	}
}

export default MovieInfo;
