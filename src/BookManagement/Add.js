import React from 'react';
import styled from "styled-components";

function Add({ setHide }) {
	return (
		<AddPanel>
			<div className="blur">
				<div className="book-container">
					<form id="book-form">
						<h2>Add New Book's Information</h2>

						<div className="form-group">
							<label for="text">Book Title</label>
							<input type="text" id="text" name="text" placeholder="Enter book title" required />
						</div>

						<div className="form-group">
							<div className="titleSelect">
								<label for="category" className="labCategory">Category: </label>
								<label for="author" className="labAuthor">Author: </label>
								<label for="publisher" className="labPublisher">Publisher: </label>
							</div>

							<div className="contentSelect">
								<select className="cntCategory" name="category" id="category">
									<option value="">Choose a category</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>

								<select className="cntAuthor" name="author" id="author">
									<option value="">Choose an author</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>

								<select className="cntPublisher" name="publisher" id="publisher">
									<option value="">Choose a publisher</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</div>
						</div>

						<div className="form-group">
							<label for="date">Publication date</label>
							<input type="date" id="date" name="date" required />
						</div>

						<div className="form-group">
							<label for="">Description</label>
							<textarea placeholder="Enter a description of the book" required />
						</div>

						<div className="form-group">
							<label for="file">Content</label>
							<input type="file" id="file" name="file" required />
						</div>

						<div className="form-group">
							<div className="titleInput">
								<label className="amount" for="number">Amount</label>
								<label className="price" for="number">Price</label>
							</div>

							<div className="contentInput">
								<input className="inputAmount" type="number" id="number" name="number" placeholder="0" required />
								<input className="inputPrice" type="number" id="number" name="number" placeholder="0" required />

								<select className="currency" name="currency" id="currency">
									<option value="">Currency</option>
									<option value="$">$</option>
									<option value="VND">VND</option>
									<option value="€">€</option>
									<option value="¥">¥</option>
									<option value="₽">₽</option>

								</select>
							</div>
						</div>

						<div className="form-group">
							<label for="file">Image</label>
							<input type="file" id="file" name="file" required />
						</div>

						<div className="grBtn">
							<button type="submit">Add</button>
							<button type="cancel" onClick={() => { setHide(false) }}>Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</AddPanel>
	);
};

export default Add;

const AddPanel = styled.div`
	font-family: 'Arial', sans-serif;
	
	.blur {
        backdrop-filter: blur(10);
        background: rgba(0, 0, 0, 0.7);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
    }

	.book-container {
		margin: 5vh 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		#book-form {
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
				width: 100%;

				label {
					color: #ffffffcc;
					display: block;
					font-size: 16px;
					font-weight: bold;
					margin-bottom: 5px;
				}

				input[type="text"], [type="date"], [type="number"] {
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

				.titleSelect {
					display: flex;
					flex-direction: row;
					width: 100%;

					.labCategory, .labAuthor {
						margin-right: 5%;
						width: 30%;
					}

					.labPublisher {
						width: 30%;
					}
				}

				.contentSelect {
					display: flex;
					flex-direction: row;
					width: 100%;

					.cntCategory, .cntAuthor {
						margin-right: 5%;
						width: 30%;
						padding: 10px 15px;
						background-color: #f6f6f6;
						border: none;
						border-radius: 5px;
					}

					.cntPublisher {
						width: 30%;
						padding: 10px 15px;
						background-color: #f6f6f6;
						border: none;
						border-radius: 5px;
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

				input[type="file"] {
					box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
					color: #777;
					display: block;
					padding: 10px 15px;
					font-size: 14px;
	                font-family: 'Arial', sans-serif;
					overflow: hidden;
					cursor: pointer;

					&:hover {
						transform: scale(1.01);
						color: white;
					}
				}

				.titleInput {
					display: flex;
					flex-direction: row;
					width: 100%;

					.amount {
						margin-right: 10%;
						width: 15%;
					}

					.price {
						width: 20%;
					}
				}

				.contentInput {
					display: flex;
					flex-direction: row;
					width: 100%;

					.inputAmount {
						margin-right: 10%;
						width: 15%;
						padding: 10px 15px;
						background-color: #f6f6f6;
						border: none;
						border-radius: 5px;
					}

					.inputPrice {
						margin-right: 0.5%;
						width: 20%;
						padding: 10px 15px;
						background-color: #f6f6f6;
						border: none;
						border-radius: 5px;
					}

					.currency {
						width: 15%;
						padding: 10px 15px;
						background-color: #f6f6f6;
						border: none;
						border-radius: 5px;
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