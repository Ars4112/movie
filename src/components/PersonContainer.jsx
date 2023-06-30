import React from "react";

import styled from "styled-components";

const Container = styled.div`
	display: flex;
	gap: 10px;
	background-color: #ffffff;
	padding: 20px;
	max-width: 1000px;
	width: 300px;
	position: absolute;
	left: ${({ position }) => `${position.x.toString()}px` || "-100px"};

	top: ${({ position }) => `${position.y.toString()}px` || "-100px"};
	transform: translate(-100%);
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
	// console.log(props.position);
	return (
		<>
			<Container position={props.position}>
				<Img src={props.getStaff.posterUrl} />
				<TextWrapper>
					<StaffName>
						{props.getStaff.nameRu === ""
							? props.getStaff.nameEn
							: props.getStaff.nameRu}
					</StaffName>
					<span>
						{props.getStaff.professionKey === "ACTOR"
							? "Актер"
							: props.getStaff.professionKey === "DIRECTOR"
							? "Режессер"
							: props.getStaff.professionKey === "DESIGN"
							? "Художник"
							: props.getStaff.professionKey === "PRODUCER"
							? "Продюсер"
							: props.getStaff.professionKey === "TRANSLATOR"
							? "Переводчик"
							: props.getStaff.professionKey === "WRITER"
							? "Сценарисе"
							: props.getStaff.professionKey === "OPERATOR"
							? "Оператор"
							: props.getStaff.professionKey === "EDITOR"
							? "Монтажер"
							: ""}
					</span>
				</TextWrapper>
			</Container>
		</>
	);
};

export default PersonContainer;
