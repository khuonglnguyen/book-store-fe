import React from 'react';
import styled from "styled-components";

function Update({ setHide }) {
	return (
		<UpdatePanel>
			<div className="blur">
				<div className="publisher-container">
					<form id="publisher-form">
						<h2>Update Publisher's Information</h2>

						<div className="form-group">
							<label for="text">Publisher</label>
							<input type="text" id="text" name="text" placeholder="Enter name of publisher" required />
						</div>

						<div className="form-group">
							<label for="date">Address</label>
							<input type="text" id="text" name="text" placeholder="Enter address of publisher" required />
						</div>

						<div className="form-group">
							<label for="">Description</label>
							<textarea placeholder="Enter a description of the publisher" required />
						</div>

						<div className="grBtn">
							<button type="submit">Update</button>
							<button type="cancel" onClick={() => { setHide(false) }}>Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</UpdatePanel>
	);
};

export default Update;

const UpdatePanel = styled.div`
	background-color: #f2f2f2;
	font-family: 'Arial', sans-serif;
	
	.blur {
		position: absolute;
        backdrop-filter: blur(10);
        background: rgba(0, 0, 0, 0.7);
		width: 86%;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
    }

	.publisher-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		#publisher-form {
			background: linear-gradient(123deg, rgba(11,11,121,1) 33%, rgba(117,14,95,1) 67%, rgba(217,13,34,1) 100%);
			border-radius: 1%;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
			padding: 40px;
			width: 800px;
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

				input[type="text"] {
					background-color: #f6f6f6;
					border: none;
					border-radius: 5px;
					box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
					color: #777;
					display: block;
					font-size: 12px;
					padding: 10px 15px;
					width: 100%;
	                font-family: 'Arial', sans-serif;

					&:focus {
						outline: none;
					}
				}

                textarea {
	                font-family: 'Arial', sans-serif;
                    width: 100%;
                    height: 100px;
                    background-color: #f6f6f6;
					border: none;
					border-radius: 5px;
					box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
					color: #777;
					display: block;
					font-size: 12px;
					padding: 10px 15px;

                    &:focus {
						outline: none;
					}
                }
			}

			.grBtn {
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 300px;

				button {
					background: linear-gradient(123deg, rgba(14,14,217,1) 33%, rgba(149,60,130,1) 67%, rgba(29,179,51,1) 100%);
					border-radius: 5%;
					border: none;
                    width: 100px;
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
		}
	}
`;