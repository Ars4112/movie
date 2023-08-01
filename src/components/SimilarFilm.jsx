import React from "react";

import styled from "styled-components";

const Img = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	margin: 0;
`;

const SimilarFilm = (props) => {
	const onHandle = (e) => {
		e.preventDefault();
	};
	return (
		<a href={`/film/${props.id}/similars`} onMouseDown={onHandle}>
			<Img src={props.img} alt="#" />
		</a>
	);
};

export default SimilarFilm;
