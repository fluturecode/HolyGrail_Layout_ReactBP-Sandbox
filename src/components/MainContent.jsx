import React from "react"
import styled from "styled-components"
import { Switch, Route, Redirect } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { ResetPasswordPage } from "../pages/ResetPasswordPage"
import { LoginForm } from "./LoginForm"

const MainWrapper = styled.div`
	display: flex;
	flex: 1 1;
	background-color: #175f6e;
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
				<Route path='/' component={HomePage} />
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
