
import Header from "./components/Header";
import CatalogContainer from "./components/CatalogContainer";
import Global from "./components/Global";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import MovieInfoContainer from "./components/MovieInfoContainer";
// import PersonContainer from "./components/PersonContainer"
// import getId from "./components/MovieInfoContainer"

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
				<Switch>
				{/* <Route path={`staff/:id`}>
					<PersonContainer />
				</Route> */}
					<Route path="/film/:id/similars">
						<MovieInfoContainer />
					</Route>
					<Route path="/film/:id">
						<MovieInfoContainer />
					</Route>
					<Route index>
						<CatalogContainer />
					</Route>
				</Switch>
			</Container>
			<Global />
		</>
	);
}

export default App;
