import React, { useState } from 'react';
import styled from "styled-components";
import SignUp from "../Account/SignUp.js"
import SignIn from "../Account/SignIn.js"

function Signup({setHide}) {

	// const [isSignUp, setSignUp] = useState(false);
    // const [isSignIn, setSignIn] = useState(false);

	// const showSignIn = () => {
    //     setSignIn(true);
    // }

    // function setHideSignUp(setup) {
    //     setSignUp(setup);
    // }

    return (		
        <SignUpForm>
			<div className="blur">
				<div className="signup-container">
					<form id="signup-form">
						<h2>Sign Up</h2>

						<div className="form-group">
							<label for="text">Full name</label>
							<input type="text" id="text" name="fullName" placeholder="Enter your full name" required/>
						</div>

						<div className="form-group">
							<label for="phone">Phone number</label>
							<input type="tel" id="phone" name="phoneNumber" placeholder="Enter your phone number" required/>
						</div>
						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" id="password" name="password" placeholder="Enter your password" required/>
						</div>

						<div className="form-group">
							<label for="address">Address</label>
							<input type="address" id="address" name="address" placeholder="Enter your address"  required/>
						</div>

						<div className="grBtn">
							<button type="submit">Sign Up</button>
							<button type="button" onClick={() => {setHide(false)}}>Cancel</button>
						</div>

						<div className="signup-group">
							<p>Are you have account?</p>
							<p className="signin" onClick="">Sign In</p>
						</div>
					</form>
				</div>
			</div>
        </SignUpForm>
	)
}

export default Signup;

const SignUpForm = styled.div`
	font-family: 'Arial', sans-serif;

	.blur {
		position: absolute;
        backdrop-filter: blur(10);
        background: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		z-index: 1;
    }

	.signup-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		#signup-form {
			background: linear-gradient(123deg, rgba(11,11,121,1) 33%, rgba(117,14,95,1) 67%, rgba(217,13,34,1) 100%);
			border-radius: 1%;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
			padding: 40px;
			width: 400px;
			display: flex;
			flex-direction: column;

			h2 {
				font-size: 24px;
				margin-bottom: 30px;
				text-align:	center;
				background: -webkit-linear-gradient(white, gray);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			
			.form-group {
				margin-bottom: 20px;

				label {
					color: #ffffffcc;
					display: block;
					font-size: 16px;
					font-weight: bold;
					margin-bottom: 5px;
				}

				input[type="text"], [type="tel"], [type="password"], [type="address"] {
					background-color: #f6f6f6;
					border: none;
					border-radius: 5px;
					box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
					color: #777;
					display: block;
					font-size: 12px;
					padding: 10px 15px;
					width: 100%;

					&:focus {
						outline: none;
					}
				}

				a {
					float: right;
					font-size: 12px;

					&:hover {
						color: white;
					}
				}
			}

			.grBtn {
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 30px;
				margin-bottom: 30px;

				button {
					background: linear-gradient(123deg, rgba(14,14,217,1) 33%, rgba(149,60,130,1) 67%, rgba(29,179,51,1) 100%);
					border-radius: 5%;
					border: none;
					color: #ffffffcc;
					cursor: pointer;
					display: block;
					align-items: center;
					font-size: 14px;
					padding: 10px 20px;
					transition: background-color ease-in-out 0.2s;
					
					&:hover {
						transform: scale(1.1);
					}
				}
			}

			.signup-group {
				display: flex;
				flex-direction: row;
				justify-content: center;
				font-size: 12px;
				gap: 10px;
				
				p {
					font-style: italic;
				}

				.signin {
					cursor: pointer;
					
					&:hover {
						color: white;
					}
				}
			}
		}
	}
`;