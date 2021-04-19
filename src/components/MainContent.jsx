import React from "react"
import styled from "styled-components"
import { Switch, Route, Redirect } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { ResetPasswordPage } from "../pages/ResetPasswordPage"

const MainWrapper = styled.div`
	display: flex;
	height: 100vh;
	border: 2px solid red;
	padding: 2vh 10vw;
	@media (max-width: 768px) {
		width: 100%;
		padding: 0;
	}
`

export const MainContent = () => {
	return (
		<MainWrapper>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/auth/login' component={LoginPage} />
				<Route
					exact
					path='/auth/forgot-password'
					component={ResetPasswordPage}
				/>
			</Switch>
		</MainWrapper>
	)
}

export default MainContent
