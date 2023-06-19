import Header from "./components/Header";
import CatalogContainer from "./components/CatalogContainer";
import Global from "./components/Global";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MovieInfoContainer from "./components/MovieInfoContainer";

const Container = styled.div`
	min-height: 100vh;
	height: 100%;
	width: auto;
	display: flex;
	flex-direction: column;

	background-color: gray;
`;

function App(props) {
	return (
		<>
			<Container>
				<Header />
				<Routes>
					<Route index element={<CatalogContainer />} />
					<Route path={`/film/${props.getId}`} element={<MovieInfoContainer />} />
				</Routes>
			</Container>
			<Global />
		</>
	);
}

export default App;
