import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
	margin: 0 10px;
	height: auto;
	img {
		object-fit: cover;
		height: 100%;
	}
`;

const SimilarFilm = (props) => {
	return (
		<Link to={`/film/${props.id}`}>
			<Container>
				<img src={props.img} alt="#" />
			</Container>
		</Link>
	);
};

export default SimilarFilm;
