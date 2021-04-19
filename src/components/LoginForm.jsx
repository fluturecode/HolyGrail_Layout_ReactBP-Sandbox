import React from "react"
import styled from "styled-components"

const LoginWrapper = styled.div``

export const LoginForm = () => {
	return (
		<LoginWrapper>
			<form>
				<label>
					Username
					<input type='text' />
				</label>
				<label>
					Password
					<input type='password' />
				</label>
				<button type='submit'>Log In</button>
			</form>
		</LoginWrapper>
	)
}
