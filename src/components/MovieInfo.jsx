import React from "react";
import { Container } from "./Catalog";

class MovieInfo extends React.Component {
    
	render() {
		return (
			<Container>
                {console.log(this.setState())}
				<h2>{this.props.filmInfo
}</h2>
                <span>hdjsahhjsahdksa</span>
			</Container>
		);
	}
}

export default MovieInfo;