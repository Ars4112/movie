import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchComponent from "./SearchContainer";

const Sds = styled.h1`
	margin: 0;
	color: #000000;
`;
const Container = styled.div`
	max-width: 1360px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

 

const Link = styled(NavLink)`
	text-decoration: none;
`

class Header extends React.Component {
	render() {
		return (
			<Container>
				<Link to="/">
					<Sds>MOVIE</Sds>
				</Link>
				<SearchComponent />
			</Container>
		);
	}
}

export default Header;
