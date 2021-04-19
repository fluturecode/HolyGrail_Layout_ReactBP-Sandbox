import React from "react"
import styled from "styled-components"

const HolyGrailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	@media all and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`
const HolyGrailMain = styled.main`
	border: 2px solid blue;
	@media all and (min-width: 768px) {
		flex: 2;
		order: 2;
		min-height: 80vh;
	}
`
const HolyGrailNav = styled.aside`
	border: 2px solid;
	@media all and (min-width: 768px) {
		order: 1;
		flex: 1;
	}
`
const HolyGrailFooter = styled.footer`
	border: 2px solid gray;
	width: 100%;
	order: 4;
`

export const HolyGrailLayout = ({ leftSidebar, mainContent, footer }) => (
	<HolyGrailWrapper>
		{!!mainContent && <HolyGrailMain>{mainContent}</HolyGrailMain>}
		{!!leftSidebar && <HolyGrailNav>{leftSidebar}</HolyGrailNav>}
		{!!footer && <HolyGrailFooter>{footer}</HolyGrailFooter>}
	</HolyGrailWrapper>
)
