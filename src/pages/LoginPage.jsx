import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const LoginWrapper = styled.div`
	display: grid;
	grid-template: 15vh 70vh 15vh / 20% auto 20%;
`
const LoginGrid = styled.main`
	display: grid;
	grid-template: 40vh / 33.3% 66.6%;
	grid-area: 2 / 2 / 2 / 2;
	border-radius: 18px;
	overflow: hidden;
	box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.28);
	border: 2px solid #175f6e;
`
const LoginFormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
`
const LoginFormBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
`
export const LoginPage = () => {
	return (
		<LoginWrapper>
			<LoginGrid>
				<LoginFormContainer>
					<LoginFormBox />
					<Link to='/auth/forgot-password'>Forgot Password?</Link>
				</LoginFormContainer>
			</LoginGrid>
		</LoginWrapper>
	)
}
