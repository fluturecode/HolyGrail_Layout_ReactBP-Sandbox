import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
	width: 100%;
	text-align: center;
`

export const Header = () => {
	return (
		<HeaderWrapper>
			<h1>Header</h1>
		</HeaderWrapper>
	)
}
