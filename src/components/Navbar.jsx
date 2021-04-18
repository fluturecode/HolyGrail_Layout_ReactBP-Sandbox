import styled from "styled-components"
import { NavLink } from "react-router-dom"

const NavBarWrapper = styled.div`
	width: 100%;
	background-color: #a43f3f;
	display: flex;
	flex-direction: row;
	flex: 1 1;
`

const StyledNavLink = styled(NavLink)`
	display: block;
	padding: 0.7rem 1rem;
	flex: 1 1;
	text-align: center;
	border-bottom: 0.1rem solid #a43f3f;
	color: white;
	text-decoration: none;
	font-weight: bold;
	&:hover {
		background-color: #e09393;
	}
	&.active {
		padding: 0.5rem 1rem;
		border-bottom: 0.4rem solid #ddaeae;
	}
`

export const NavBar = () => {
	return (
		<NavBarWrapper>
			<StyledNavLink to='/directory'>Directory</StyledNavLink>
			<StyledNavLink to='/users'>Users</StyledNavLink>
			<StyledNavLink to='/logout'>Log Out</StyledNavLink>
		</NavBarWrapper>
	)
}
