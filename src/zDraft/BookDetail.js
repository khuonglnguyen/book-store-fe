import React from 'react';
import styled, { keyframes } from 'styled-components';

const showModel = true;

function BookDetail(props) {
    return (
        <BookDetailModal>
            <div className={`backdrop ${showModel ? 'showBackdrop' : 'hideBackdrop'}`}></div>
            <div className={`modal ${showModel ? 'showModal' : 'hideModal'}`}
                style={{backgroundImage: `url(https://i.pinimg.com/236x/e6/29/ab/e629abafd55637bae1e418ef77096bf5.jpg)`, 
                backgroundSize: 'cover'}}>
                <div className="container">
                    <div className="bookInfo">
                        <h1 className="bookTitle">Cristiano Ronaldo</h1>

                        <p className="author">Cristiano Ronaldo</p>
                        
                        <p className="statistic">
                            <span className='view'> View: 10.000</span>
                            <span className='like'> Like: 9.000</span>
                        </p>

                        <p className="releaseDate"> Release date: 5/2/1985</p>

                        <p className="overview">Cristiano Ronaldo is the most outstanding and comprehensive footballer in the world's history. 
                            He is a shining example of grit and determination. 
                            "Siu" is the ideology he created.</p>
                    </div>
                </div>
            </div>
        </BookDetailModal>
    );
}

export default BookDetail;

const fadeIn = keyframes`
    0%: { background: rbga(0, 0, 0, 0)}
    0%: { background: rbga(0, 0, 0, 0.6)}
`

const BookDetailModal = styled.div`
    width: 100%;
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background-color: rbga(0, 0, 0, 0.6);
        animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
    }

    .showBackdrop {
        display: block;
    }

    .hideBackdrop {
        display: none;
    }

    .modal {
        position: fixed;
        top: 25%;
        left: 0;
        z-index: 300;
        height: 60%;
        width: 100%
        margin: 0 auto;
        color: white;
        box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);

        @media screen and (max-width: 1184px) {
            height: 70%;
        }

        @media screen and (max-width: 600px) {
            height: 80%;
        }

        .container {
            position: relative;
            width: 70%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

            @media screen and (max-width: 1184px) {
                background: linear-gradient(90deg, 
                    rgba(0, 0, 0, 0.94) 40%, 
                    rgba(0, 0, 0, 0.73), 
                    transparent);
                width: 88%;
            }

            @media screen and (max-width: 980px) {
                background: linear-gradient(90deg, 
                    rgba(0, 0, 0, 0.95) 50%, 
                    transparent);
                width: 100%;
            }

            @media screen and (max-width: 600px) {
                background: linear-gradient(90deg, 
                    rgba(0, 0, 0, 0.88) 60%, 
                    transparent);
            }

            .bookInfo {
                width: 65%;
                height: 100%;
                padding-left: 24px;
                color: white;
                font-size: 20px;
                padding-top: 30px;

                @media screen and (max-width: 600px) {
                    font-size: 16px;
                    width: 80%;
                }

                .bookTitle {
                    margin-top: 30px;
                }

                .author, .releaseDate {
                    margin-top: 12px;
                }

                .statistic {
                    margin-top: 20px;
                    display: flex;

                    .view {
                        color: var(--color-green);
                    }

                    .like {
                        color: yellow;
                        margin-left: 12px;
                    }
                }

                .overview {
                    margin-top: 20px;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.4;
                    font-size: 18px;
                }
            }
        }
    }

    .showModal {
        top: 25%;
        opacity: 1;
        left: 0;
        visibility: visible;
        transition: 0.3s ease-in-out;
    }

    .hideModal {
        top: 0;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
    }
`;