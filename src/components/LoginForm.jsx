import React from "react"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"

const FormWrapper = styled.div`
	width: 50vw;
	box-shadow: 5px 5px 10px;
	background-color: white;
	padding: 4vh 4vw;

	@media (max-width: 768px) {
		width: 100%;
		margin-left: 0%;
		margin-right: 0%;
		box-shadow: none;
		padding: 1vh 1vw;
	}
`

export const LoginForm = () => {
	return (
		<FormWrapper>
			<Form>
				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' placeholder='Enter email' />
				</Form.Group>
				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control type='password' placeholder='Password' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</FormWrapper>
	)
}
