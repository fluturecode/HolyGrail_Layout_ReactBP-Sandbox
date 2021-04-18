import React from "react"
import styled from "styled-components"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MainContent } from "./components/MainContent"
import { BrowserRouter } from "react-router-dom"
import { HolyGrailLayout } from "./components/HolyGrailLayout"

export const App = () => {
	const AppWrapper = styled.div`
		min-height: 100vh;
		font-family: "Helvetica";
		background-color: #eee;
		@media (max-width: 768px) {
			margin-left: 0%;
			margin-right: 0%;
		}
	`

	return (
		<AppWrapper>
			<BrowserRouter>
				<HolyGrailLayout
					header={<Header />}
					mainContent={<MainContent />}
					footer={<Footer />}
				/>
			</BrowserRouter>
		</AppWrapper>
	)
}
