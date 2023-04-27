import imageLogo from "../assets/ebooklogoremovebg.png";
import { MdSearch } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import styled from "styled-components";
import { useState } from "react";
import SignUp from "../Account/SignUp.js"
import SignIn from "../Account/SignIn.js"

function Header(props) {

    const [isSignUp, setSignUp] = useState(false);
    const [isSignIn, setSignIn] = useState(false);

    const showSignUp = () => {
        setSignUp(true);
    }

    const showSignIn = () => {
        setSignIn(true);
    }

    function setHide(setup) {
        setSignUp(setup);
        setSignIn(setup);
    }

    const [stringVal, setStringVal] = useState("");

    const checkingSearch = async (str) => {
        await setStringVal(str.target.value);
    }

    const setEmptySearch = async () => {
        await setStringVal("");
    }

    return (
        <NavigationBar>
            {isSignUp && <SignUp setHide={setHide} />}
            {isSignIn && <SignIn setHide={setHide} />}

            <div className="container">
                <nav>
                    <div className="navbar">
                        <div className="logo"><img src={imageLogo} alt="" /></div>

                        {/* <FaBars /> */}

                        <div className="menu">
                            <button>Home</button>
                            <button>About</button>
                            <button>Contact</button>
                            <button onClick={() => { showSignUp() }}>Sign Up</button>
                            <button onClick={() => { showSignIn() }}>Sign In</button>
                        </div>

                        <div className="searchbar">
                            <input
                                type="text"
                                placeholder="Search by title, genres, ..."
                                value={stringVal}
                                name="stringVal"
                                onChange={checkingSearch} />

                            <IoMdCloseCircleOutline size={20} className="iconClose"
                                style={{ visibility: stringVal !== "" ? "visible" : "hidden", right: 0 }}
                                onClick={setEmptySearch} />

                            <label className="icon">
                                <MdSearch size={30} />
                            </label>
                        </div>
                    </div>
                </nav>
            </div>
        </NavigationBar>
    );
}

export default Header;

const NavigationBar = styled.div`

    .container {
        display: flex;
        border-bottom: 1px solid black;

        nav {
            display: flex;
            flex-direction: row;
            padding: 0 7%;
            width: 100%;
            height: 10vh;

            .navbar {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 100%;

                .logo {
                    width: 30%;
                    justify-content: left;
                    height: 100%;
                    user-select: none;

                    img {
                        width: auto;
                        height: 100%;
                    }
                }

                .menu {
                    display: flex;
                    flex-direction: row;
                    width: 50%;
                    height: 100%;

                    button {
                        height: 100%;
                        width: 20%;
                        font-size: 1rem;
                        font-weight: bold;
                        text-transform: uppercase;
                        background-color: #fff;
                        cursor: pointer;
                        user-select: none;

                        &:hover {
                            background: linear-gradient(to top, #999966 0%, #669999 100%);
                        }
                    }
                }

                .searchbar {
                    display: flex;
                    align-items: center;
                    background-color: #fff;
                    border-radius: 24px;
                    overflow: hidden;
                    transition: width 0.3s ease-in-out;
                    ${'' /* border: 1px solid black; */}
                    box-shadow: 0px 0px 7px 5px rgba(200, 200, 200, 0.3);
                    width: 20%;
                    margin: 0 1%;


                    input {
                        width: 83%;
                        flex: 1;
                        height: 30px;
                        border: none;
                        outline: none;
                        padding: 0 3px 0 12px;
                        font-size: 14px;
                        font-family: 'Open Sans', sans-serif;
                        background-color: transparent;
                    }

                    .iconClose {
                        
                        opacity: 0.5;

                        &:hover {
                            opacity: 0.8;
                            transition: 0.1s;
                        }
                    }

                    label {
                        width: 15%;
                        border: 1px solid black;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        cursor: pointer;
                        margin: 3px;
                        opacity: 0.5;

                        &:hover {
                            opacity: 0.8;
                            transition: 0.18s;
                        }
                    }
                }
            }
        }

        @media screen and (max-width: 768px) {
            nav {
                display: flex;
                flex-direction: row;
                padding: 0 7%;
                width: 100%;

                .navbar {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 10vh;

                    .logo {
                        width: 30%;
                        justify-content: left;
                        height: 100%;
                        user-select: none;

                        img {
                            width: auto;
                            height: 100%;
                        }
                    }

                    .menu {
                        display: flex;
                        flex-direction: row;
                        width: 50%;
                        height: 100%;

                        button {
                            height: 100%;
                            width: 20%;
                            font-size: 1rem;
                            font-weight: bold;
                            text-transform: uppercase;
                            background-color: #fff;
                            cursor: pointer;
                            user-select: none;

                            &:hover {
                                background-color: #f00;
                            }
                        }
                    }

                    .searchbar {
                        display: flex;
                        align-items: center;
                        background-color: #fff;
                        border-radius: 24px;
                        overflow: hidden;
                        transition: width 0.3s ease-in-out;
                        ${'' /* border: 1px solid black; */}
                        box-shadow: 0px 0px 7px 5px rgba(200, 200, 200, 0.3);
                        width: 20%;
                        margin: 0 1%;


                        input {
                            width: 83%;
                            flex: 1;
                            height: 30px;
                            border: none;
                            outline: none;
                            padding: 0 3px 0 12px;
                            font-size: 14px;
                            font-family: 'Open Sans', sans-serif;
                            background-color: transparent;
                        }

                        .iconClose {
                            
                            opacity: 0.5;

                            &:hover {
                                opacity: 0.8;
                                transition: 0.1s;
                            }
                        }

                        label {
                            width: 15%;
                            border: 1px solid black;
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            justify-content: center;
                            border: none;
                            cursor: pointer;
                            margin: 3px;
                            opacity: 0.5;

                            &:hover {
                                opacity: 0.8;
                                transition: 0.18s;
                            }
                        }
                    }
                }
            }
        }
    }
`;