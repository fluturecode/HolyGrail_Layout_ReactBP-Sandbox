import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { LoginForm } from "../components/LoginForm"

const LoginWrapper = styled.div`
	background-color: #175f6e;
`

const LoginGrid = styled.main``

const LoginFormContainer = styled.div``

export const LoginPage = () => {
	return (
		<LoginWrapper>
			<LoginGrid>
				<LoginFormContainer>
					<LoginForm />
					<Link to='/auth/forgot-password'>Forgot Password?</Link>
				</LoginFormContainer>
			</LoginGrid>
		</LoginWrapper>
	)
}
