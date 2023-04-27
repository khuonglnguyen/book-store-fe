import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdCloseCircleOutline } from "react-icons/io"

function BookDetail({ setHide }) {
    //show and hide book view
    const [isShowView, setShowView] = useState(false);
    const showView = () => {
        setShowView(true);
    }
    function setHide(setup) {
    setShowView(setup);
    }

    return (
        <BookDetailPanel>
            <div className = "blur" >
                <div className="container">
                    <img className="background" src="https://wallpaperaccess.com/full/124383.jpg" alt=''/>

                    <div className="book-container">
                        <div className="iconClose"  onClick = {() => { setHide(false) } }><IoMdCloseCircleOutline /></div>
                        
                        <div className="book">
                            <div className="bookDetail">
                                <h1 className="bookTitle">Cristiano Ronaldo</h1>

                                <div className="bookOverview">
                                    <p>Author: Cristiano Ronaldo</p>

                                    <p>
                                        <span className='view'>View: 10.000k</span>
                                        <span className='like'>Like: 9.000k</span>
                                    </p>

                                    <p>Price: 10.000$</p>

                                    <p>Publication date: 02/05/1985</p>

                                    <p>Publisher: Cristiano Ronaldo</p>

                                    <p>Description: Cristiano Ronaldo is the most outstanding and comprehensive footballer in the world's history. 
                                        He is a shining example of grit and determination. 
                                        "Siu" is the ideology he created.</p>
                                </div>

                                <div className="grBtn">
                                    <button>Order this book</button>
                                    <button>Read this book</button>
                                </div>
                            </div>

                            <img className="imgBook" src="https://books.google.com.vn/books/content?id=ICZISodVvlMC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72V97twymClSdEaQmC-zBR-JnFjElGLosfrgMRMQ3LymgIgfKUkzVkirOoQDF8_aQxyhF8D-8-BKEDS_qEfShVTVdEtMYswLc-T6rOu1cSJ9N50ceC6uE2E7gT4mhv5bxL70Caw" alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </BookDetailPanel>
    );
}

export default BookDetail;

const BookDetailPanel = styled.div`
    margin: 0;
    padding: 0;

    .blur {
		position: absolute;
		backdrop-filter: blur(10);
		background: rgba(0, 0, 0, 0.9);
		width: 98%;
		height: 130%;
		display: flex;
		justify-content: center;
		align-items: center;
        user-select: none;
        z-index: 30;
	}

    .container {
        width: 100%;
        height: 80vh;
        color: white;

        .background {
            position: fixed;
            width: 100%;
            height: 70%;
        }

        .book-container {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            .iconClose {
                font-size: 40px;
                text-align: right;
                margin: 20px 20px 10px 0;
                overflow: hidden;
                cursor: pointer;
                color: gray;
            }

            .book {
                display: flex;
                flex-direction: row;
                margin: 0 10% 20px 10%;
                width: 80%;

                .bookDetail {
                    display: flex;
                    flex-direction: column;
                    text-align: justify;
                    width: 70%;
                    margin-right: 10%;

                    .bookTitle {
                        font-size: 25px;
                        margin-bottom: 15px;
                    }

                    .bookOverview {
                        font-size: 18px;

                        p {
                            margin-bottom: 10px;
                            line-height: 1.4;

                            span {
                                margin-right: 30px;
                            }
                        }
                    }

                    .grBtn {
                        display: flex;
                        flex-direction: row;
                        justify-content: right;
                        gap: 30px;
                        margin-top: 20px;

                        button {
                            background: var(--color-dark);
                            border-radius: 5%;
                            border: none;
                            color: white;
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

                .imgBook {
                    width: 20%;
                    user-select: none;
                }
            }
        }

        @media screen and (max-width: 860px){    
            .imgBook {
                height: 200px;
            }
        }
    }
`;