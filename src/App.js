import React from "react"
import styled from "styled-components"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { MainContent } from "./components/MainContent"
import { BrowserRouter } from "react-router-dom"
import { HolyGrailLayout } from "./components/HolyGrailLayout"
// import { LoadingOverlayProvider } from "./containers/LoadingOverlayProvider"
// import { AuthenticatedUserProvider } from "./containers/AuthenticatedUserProvider"

export const App = () => {
	const Background = styled.div`
		background: #7a5114;
		min-height: 100vh;
		width: 100%;
	`

	const AppWrapper = styled.div`
		min-height: 100vh;
		margin-left: 15%;
		margin-right: 15%;
		font-family: "Optima", serif;
		background-color: #eee;
		@media (max-width: 768px) {
			margin-left: 0%;
			margin-right: 0%;
		}
	`

	return (
		<Background>
			<AppWrapper className='app'>
				<LoadingOverlayProvider>
					<AuthenticatedUserProvider>
						<BrowserRouter>
							<HolyGrailLayout
								header={<Header />}
								mainContent={<MainContent />}
								footer={<Footer />}
							/>
						</BrowserRouter>
					</AuthenticatedUserProvider>
				</LoadingOverlayProvider>
			</AppWrapper>
		</Background>
	)
}
