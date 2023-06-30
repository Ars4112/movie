import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import SimilarFilm from "./SimilarFilm";

const Container = styled.div`
	max-width: 80%;
	margin: 60px auto;
`;

const SliderSimilarFilm = (props) => {
	console.log(props.similarFilm);
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Container>
				<Slider {...settings}>
					{props.similarFilm.items.map((i) => {
						return (
							<SimilarFilm
								key={i.filmId}
                id={i.filmId}
								img={i.posterUrlPreview}
								title={i.nameRu}
							/>
						);
					})}
				</Slider>
			</Container>
		</>
	);
};

export default SliderSimilarFilm;
