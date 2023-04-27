import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

function BookView(props) {
    const [love, setLove] = useState(30);
    const [isLoved, setIsLoved] = useState(false);

    function handleLikeClick() {
        if (!isLoved) {
            setLove(love + 1);
            setIsLoved(true);
        } else {
            setLove(love - 1);
            setIsLoved(false);
        }
    }
      
    return (
        <BookViewPanel>
            <div className="container">
                <div className="bookDetail">
                    <div className="detail1">
                        <img src="https://books.google.com.vn/books/publisher/content?id=7gnJCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71gizatCmE2NicfHMrmFXz5l4WEsnm0tYwYNm8P9Q8ErPQaGKUoHODqk2ORKPkOV0PlSLrMzIBhV-tSPkjIZKW1sRtMwJWVtCYJXXK274K0yIt6Y2tUQSEIRqo63pqRhWqJ7qjL" alt='' />

                        <div className="order">
                            <p className="price">Price: 10.000$</p>
                            <button>Order this book</button>
                        </div>
                    </div>

                    <h1>Cristiano Ronaldo: The Biography</h1>

                    <p className="author">by Guillem Balague</p>

                    <p className="about">About this book</p>

                    <p>
                        <span className='view'>100B views</span>
                        <span className='love'>{love} loves</span>
                    </p>

                    <div className="userLove">
                        <p className={`${isLoved ? 'loved' : 'unLove'}`} onClick={() => { handleLikeClick() }}>{isLoved ? <AiFillHeart size={30} values={0} /> : <AiOutlineHeart size={30} />}</p>
                        <p className={`${isLoved ? 'valueLove' : 'valueUnlove'}`}>{isLoved ? "Loved" : "Unlove"}</p>
                    </div>
                </div>

                <div className="bookView">
                    <p>Book content</p>
                </div>
            </div>
        </BookViewPanel>
    );
}

export default BookView;

const BookViewPanel = styled.div`
    margin: 0;
    padding: 0;

    .container {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
        border-right: 1px solid black;
        
        .bookDetail {
            width: 20%;
            height: 100%;
            background-color: gray;
            display: flex;
            flex-direction: column;
            padding: 5% 10px;
            margin-right: 10px;
            text-align: justify;

            .detail1 {
                width: 100%;
                display: flex;
                flex-direction: row;

                img {
                    width: 60%;
                    margin-right: 3%;
                    user-select: none;
                    border-radius: 5px;
                }

                .order {
                    width: 37%;
                    user-select: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    .price {
                        font-size: 14px;
                        margin-bottom: 5px;
                    }

                    button {
                        padding: 10px 0;
                        background: var(--color-dark);
                        border-radius: 5%;
                        border: none;
                        color: white;
                        cursor: pointer;
                        display: block;
                        align-items: center;
                        transition: background-color ease-in-out 0.2s;
                        
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
            }

            h1 {
                text-align: left;
                font-size: 20px;
                margin: 10px 0;
            }

            .author {
                font-size: 14px;
                margin-bottom: 10px;
            }

            .about {
                font-size: 12px;
                text-decoration: underline;
                margin-bottom: 10px;
                cursor: pointer;
                user-select: none;

                &:hover {
                    color: #fff;
                }
            }

            .view {
                font-size: 16px;
                margin-right: 15%;
                color: var(--color-green);
                user-select: none;
            }

            .love {
                font-size: 16px;
                color: var(--color-yellow);
                user-select: none;
            }

            .userLove {
                margin-top: 10px;
                justify-content: center;
                text-align: center;
                align-items: center;
                display: flex;
                flex-direction: row;
                gap: 5px;

                .unLove, .valueUnlove {
                    user-select: none;
                    cursor: pointer;
                }

                .loved, .valueLove {
                    color: red;
                    cursor: pointer;
                    user-select: none;
                }
            }
        }

        .bookView {
            width: 80%;
            ${'' /* background: red; */}
            padding: 20px;
            text-align: center;
            justify-content: center;
        }
    }
`;