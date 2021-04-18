import React from "react"
import styled from "styled-components"
import { NavBar } from "./Navbar"

const HeaderWrapper = styled.div`
	width: 100%;
	text-align: center;
	padding-top: 2vh;
`

export const Header = () => {
	return (
		<HeaderWrapper>
			<NavBar />
		</HeaderWrapper>
	)
}
