import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { LoginForm } from "../components/LoginForm"

const ContentWrapper = styled.div`
	background-color: #175f6e;
`

const LoginGrid = styled.main``

const LoginFormContainer = styled.div``

const LoginFormBox = styled.div``

export const LoginPage = () => {
	return (
		<ContentWrapper>
			<LoginForm />
			{/* <LoginGrid>
				<LoginFormContainer>
					<LoginFormBox />
					<LoginForm />
					<Link to='/auth/forgot-password'>Forgot Password?</Link>
				</LoginFormContainer>
			</LoginGrid> */}
		</ContentWrapper>
	)
}
