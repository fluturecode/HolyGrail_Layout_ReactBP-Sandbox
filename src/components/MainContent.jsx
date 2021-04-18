import React from "react"
import styled from "styled-components"
import { Switch, Route, Redirect } from "react-router-dom"

const MainWrapper = styled.div`
	display: flex;
	flex: 1 1;
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
				<Route exact path='/agent-list'>
					<Directory />
				</Route>
				<Route exact path='/view-orders'>
					<OrderList />
				</Route>
				<Route exact path='/login'>
					<LoginPage />
				</Route>
				<Route exact path='/logout'>
					<LogoutPage />
				</Route>
				<Route exact path='/'>
					<Redirect to='/view-orders' />
				</Route>
				<Route path='/'>
					<NotFound />
				</Route>
			</Switch>
		</MainWrapper>
	)
}

export default MainContent
