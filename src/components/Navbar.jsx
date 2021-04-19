import styled from "styled-components"
import { NavLink } from "react-router-dom"

const NavBarWrapper = styled.div`
	width: 100%;
	background-color: grey;
	display: flex;
	flex-direction: row;
	flex: 1 1;
`

const StyledNavLink = styled(NavLink)`
	display: block;
	padding: 0.7rem 1rem;
	flex: 1 1;
	text-align: center;
	color: white;
	text-decoration: none;
	font-weight: bold;
	&:hover {
		background-color: #e09393;
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
