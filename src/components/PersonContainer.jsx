import React, { useRef, useLayoutEffect, useState, useMemo } from "react";

import styled from "styled-components";

const Container = styled.div`
	display: flex;
	gap: 10px;
	background-color: #ffffff;
	padding: 20px;
	max-width: 1000px;
	width: 300px;
	position: absolute;
	left: ${({ position }) => `${position.x.toString()}px` || "0"};

	top: ${({ position }) => `${position.y.toString()}px` || "0"};

	transform: ${({
		position,
		windowWidth,
		windowHeight,
		widthElem,
		heightElem,
	}) =>
		windowWidth - position.x < widthElem &&
		windowHeight - position.y < heightElem
			? "translate(-100%, -100%)"
			: windowWidth - position.x > widthElem &&
			  windowHeight - position.y > heightElem
			? "translate(-100%, 0)"
			: windowWidth - position.x > widthElem &&
			  windowHeight - position.y < heightElem
			? "translate(-100%, -100%)"
			: windowWidth - position.x < widthElem &&
			  windowHeight - position.y > heightElem
			? "translate(-100%, 0)"
			: "translate(-100%)"};
	z-index: 1;
	border-radius: 10px;
	box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const StaffName = styled.h3`
	margin: 0;
`;
const Img = styled.img`
	object-fit: cover;
	width: 100px;
`;

const PersonContainer = (props) => {
	const role = useMemo(() => {
		
		switch (props.getStaff.professionKey) {
			case "ACTOR":
				return "Актер";
			case "DIRECTOR":
				return "Режессер";
			case "DESIGN":
				return "Художник";
			case "PRODUCER":
				return "Продюсер";
			case "TRANSLATOR":
				return "Переводчик";
			case "WRITER":
				return "Сценарист";
			case "OPERATOR":
				return "Оператор";
			case "EDITOR":
				return "Монтажер";
			default:
				return "";
		}
	}, [props.getStaff.professionKey]);

	const divBlock = useRef();
	const [widthElem, setwidthElem] = useState(0);
	const [heightElem, setheightElem] = useState(0);
	const [windowWidth, setwindowWidth] = useState(0);
	const [windowHeight, setwindowHeight] = useState(0);

	useLayoutEffect(() => {
		setwidthElem(divBlock.current.offsetWidth);
		setheightElem(divBlock.current.offsetHeight);
		setwindowWidth(window.innerWidth);
		setwindowHeight(window.innerHeight);
	}, [widthElem, heightElem, windowWidth, windowHeight]);

	return (
		<>
		{}
			<Container
				ref={divBlock}
				position={props.position}
				windowHeight={windowHeight}
				windowWidth={windowWidth}
				widthElem={widthElem}
				heightElem={heightElem}
			>
				<Img src={props.getStaff.posterUrl} />
				<TextWrapper>
					<StaffName>
						{props.getStaff.nameRu === ""
							? props.getStaff.nameEn
							: props.getStaff.nameRu}
					</StaffName>
					<span>
						{role}
					</span>
				</TextWrapper>
			</Container>
		</>
	);
};

export default PersonContainer;
