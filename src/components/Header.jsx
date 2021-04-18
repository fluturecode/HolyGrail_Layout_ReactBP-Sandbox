import React from "react"
import styled from "styled-components"
import { useAuthenticatedUserProvider } from "../../containers/AuthenticatedUserProvider"
import LogoText from "./LogoText"
import NavBar from "./NavBar"

const HeaderWrapper = styled.div`
	width: 100%;
	text-align: center;
	padding-top: 2vh;
`

export const Header = () => {
	const authenticatedUserProvider = useAuthenticatedUserProvider()

	return (
		<HeaderWrapper>
			<LogoText>Bitwise Technology Constulting</LogoText>
			{authenticatedUserProvider.isLoggedIn && (
				<>
					<NavBar />
					<h2>
						Hello
						{authenticatedUserProvider.user?.username || "friend"}!
					</h2>
				</>
			)}
		</HeaderWrapper>
	)
}
