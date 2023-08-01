import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Navigation, Pagination } from "swiper/modules";
import styled from "styled-components";
import SimilarFilm from "./SimilarFilm";

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
				slidesToShow: 5,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 3,
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

// const Container = styled(Swiper)`
// 	max-width: 80%;
// 	margin: 60px auto;
// 	justify-content: center;

// 	& .swiper-wrapper {
// 		/* display: flex; */
// 		justify-content: center;
// 		gap: 40px;
// 	}

// 	& > .swiper-button-next {
// 		right: 0;
// 	}

// 	& > .swiper-button-prev {
// 		left: 0;
// 	}

// 	& > .swiper-button-next,
// 	.swiper-button-prev {
// 		&::after {
// 			font-size: 15px;
// 			font-weight: bold;
// 			@media (max-width: 768px) {
// 				font-size: 20px;
// 	}
// 		}
// 	}
// `;

// const SwiperArrow = styled.div`
// 	background-color: #fff;
// 	color: black;
// 	border-radius: 50%;
// 	width: 30px;
// 	height: 30px;
// 	@media (max-width: 768px) {
// 		width: 50px;
// 		height: 50px;
// 	}
// `;

// const SwiperPagination = styled.div`
// 	color: black;
// 	background-color: #fff;
// 	width: 10px;
// 	height: 10px;
// `;

// const SliderSimilarFilm = (props) => {
// 	console.log(props.similarFilm);

// 	return (
// 		<>
// 			<Container
// 				slidesPerView={1}
// 				spaceBetween={10}
// 				navigation={{
// 					nextEl: ".swiper-button-next",
// 					prevEl: ".swiper-button-prev",
// 				}}
// 				pagination={{
// 					el: ".swiper-pagination",
// 					clickable: true,
// 				}}
// 				breakpoints={{
// 					// 380: {
// 					// 	slidesPerView: 1,
// 					// 	spaceBetween: 0,
// 					// },
// 					640: {
// 						slidesPerView: 2,
// 						spaceBetween: 20,
// 					},
// 					768: {
// 						slidesPerView: 4,
// 						spaceBetween: 0,
// 					},
// 					1024: {
// 						slidesPerView: 5,
// 						spaceBetween: 50,
// 					},
// 				}}
// 				modules={[Navigation, Pagination]}
// 				className="mySwiper"
// 			>
// 				{props.similarFilm.items.map((i) => {
// 					return (
// 						<SwiperSlide key={i.filmId}>
// 							<SimilarFilm img={i.posterUrlPreview} id={i.filmId} />
// 						</SwiperSlide>
// 					);
// 				})}
// 				<SwiperArrow className="swiper-button-prev" />
// 				<SwiperArrow className="swiper-button-next" />
// 				{/* <SwiperPagination className="swiper-pagination" /> */}
// 			</Container>
// 		</>
// 	);
// };

const Container = styled.div`
	max-width: 80%;
	margin: 60px auto;
	justify-content: center;
`

const SliderWrapper = styled(Slider)`
	.slick-track {
		display: flex;
		gap: 30px;
	}
`

const SliderSimilarFilm = (props) => {
	console.log(props.similarFilm);

	return (
		<Container>
		
		<SliderWrapper {...settings}>
			{props.similarFilm.items.map((i) => {
				return (
					<SimilarFilm key={i.filmId} img={i.posterUrlPreview} id={i.filmId} />
				);
			})}
		</SliderWrapper>
		</Container>
	);
};
export default SliderSimilarFilm;
