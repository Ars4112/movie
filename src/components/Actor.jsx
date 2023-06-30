import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import React, { useState } from "react";
import PersonContainer from "./PersonContainer";

const Item = styled.li`
	/* position: relative; */
`;

const Actor = (props) => {
	const [tooltipStaff, setTooltipStaff] = useState(false);
	const [position, setPosition] = useState(
		{
			x: 0,
			y: 0
		}
	)
	
	const showStaff = (event) => {
		setTooltipStaff(true);
		setPosition(
			{
				x: event.pageX,
				y: event.pageY

			}
		)
	};
	
	const hideStaff = () => setTooltipStaff(false);
	return (
		<>
			<Item>
				<NavLink
					to={`staff/${props.getStaff.staffId}`}
					onMouseOver={showStaff}
					onMouseOut={hideStaff}
				>
					{tooltipStaff && (
						<PersonContainer
						position={position}
							staffId={props.getStaff.staffId}
							getStaff={props.getStaff}
						/>
					)}
					<span>
						{props.getStaff.nameRu === ""
							? props.getStaff.nameEn
							: props.getStaff.nameRu}
					</span>
				</NavLink>
			</Item>
		</>
	);
};

export default Actor;
