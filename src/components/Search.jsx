import React, {useRef} from "react";
import styled from "styled-components";

const SearchInput = styled.input`
	padding: 8px;
	border-radius: 5px;
`;

const Search = (props) => {
	const ref = useRef()
	const textValue = () => {
        props.inputSearchValue(ref.current.value)
		console.log(ref.current.value);
	};
	return (
		<>
			<SearchInput placeholder="поиск"  onChange={textValue} ref={ref}/>
		</>
	);
};

export default Search;
