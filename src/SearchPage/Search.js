import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../hooks';


const books = [
    "https://i.pinimg.com/236x/f9/1e/96/f91e966f9762182d8c05e6f19aacdb7a.jpg",
    "https://i.pinimg.com/236x/19/df/a7/19dfa7c322a2dfb4c07240c521df1e74.jpg",
    "https://i.pinimg.com/236x/e6/3c/b3/e63cb3eba00a6d83d4a3cab53d61ea01.jpg",
    "https://i.pinimg.com/236x/e4/b4/76/e4b476c8f7f0d5da22d71615c213bc9a.jpg",
    "https://i.pinimg.com/236x/e2/bf/0b/e2bf0b56771ebdc44a86e7a0f8107e90.jpg",
    "https://i.pinimg.com/236x/d8/4b/eb/d84beb5f7234dcdd7f83f8014791b91f.jpg",
    "https://i.pinimg.com/236x/bf/d5/c1/bfd5c1515528ed749200d1e4e41e4603.jpg",
    "https://i.pinimg.com/236x/45/1a/9d/451a9d0d2f3e0da01c8ccbce2fce133b.jpg",
    "https://i.pinimg.com/236x/06/91/ae/0691ae71fbf23be5a2f66704f79f6760.jpg",
    "https://i.pinimg.com/236x/28/bc/85/28bc85bba0749a2a36945b7b3a420180.jpg"
];

function Search(props) {
    const [windowWidth] = useViewport();

    return (
        <SearchPane>
            {
                books && books.length > 0 ? (
                    <div className="searchResult"
                        style={{
                            gridTemplateColumns: `repeat(${
                                windowWidth > 1200 ? 5 : 
                                windowWidth > 992 ? 4 : 
                                windowWidth > 768 ? 3 : 
                                windowWidth > 600 ? 2 : 1
                            }, auto)`
                        }}>
                        {
                            books.map((book, index) => (
                                <div className="bookItem">
                                <img src={book} alt=""/>
                                <span>Book Title</span>
                            </div>
                            ))
                        }
                    </div>
                )  : (
                    <NotFound>
                        <h2>You search for "keyword" did not have any matches.</h2>
                    </NotFound>
                )
            }
        </SearchPane>
    );
}

export default Search;

const NotFound = styled.div`
    padding: 5rem 8rem;
    color: white;
`;

const SearchPane = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 40px;
    background: black;
    transition: all 0.3s linear;

    .searchResult {
        padding: 40px 60px;
        display: grid;
        gap: 8px;

        &:hover {
            moviesItem {
                opacity: 0.7;
            }
        }

        .bookItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            margin: 20px 0;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.2);
                z-index: 10;
                opacity: 1;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                text-align: center;
                padding: 4px;
                background: rgba(0, 0, 0, 0.5);
                color: white;
                font-weight: bold;
            }
        }
    }
`;