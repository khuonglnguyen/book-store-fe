import imageLogo from "../assets/ebooklogoremovebg.png";
import { MdSearch } from 'react-icons/md';
// import { FaBars } from 'react-icons/fa';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { GiRotaryPhone } from 'react-icons/gi';
import styled from "styled-components";
import { useState } from "react";
import SignUp from "../Account/SignUp.js"
import SignIn from "../Account/SignIn.js"
import UpdateProfile from "../Account/UpdateProfile.js"
import Home from "../HomePage/Home";
import { Link } from "react-scroll";
import Search from "../SearchPage/Search";
import CartandLoved from "../CartandLoved";
import OrderBook from "../OrderManagement/OrderBook";

function HeaderandFooter(props) {

    const [isHome, setHome] = useState(true);
    const [isSignUp, setSignUp] = useState(false);
    const [isSignIn, setSignIn] = useState(false);
    const [isProfile, setProfile] = useState(false);
    const [isOrder, setOrder] = useState(false);
    const [isHistory, setHistory] = useState(false);

    const showHome = () => {
        setHome(true);
        setHistory(false);

    }

    const showSignUp = () => {
        setSignUp(true);
    }

    const showSignIn = () => {
        setSignIn(true);
    }

    const showProfile = () => {
        setProfile(true);
    }

    const showOrder = () => {
        setOrder(true);
    }

    const showHistory = () => {
        setHome(false);
        setHistory(true);
    }

    function setHide(setup) {
        setSignUp(setup);
        setSignIn(setup);
        setProfile(setup);
        setOrder(setup);
    }

//Search functions
    const [stringVal, setStringVal] = useState("");

    const checkingSearch = async (str) => {
        await setStringVal(str.target.value);
    }

    const setEmptySearch = async () => {
        await setStringVal("");
    }

// Reload page
    const handleReload = () => {
        window.location.reload(); // reload the page when button is clicked
    };

    return (
        <div>
            <NavigationBar>
                {isSignUp && <SignUp setHide={setHide} />}
                {isSignIn && <SignIn setHide={setHide} />}
                {isProfile && <UpdateProfile setHide={setHide}/>}
                {isOrder && <OrderBook setHide={setHide}/>}

                <div className="hContainer">
                    <nav>
                        <div className="navbar">
                            <div className="logo" onClick={handleReload}><img src={imageLogo} alt="" /></div>

                            {/* <FaBars /> */}

                            <div className="menu">
                                <button onClick={handleReload}>Home</button>

                                <button>
                                    <Link to={"footerId"} spy={true} smooth={true} offset={-70} duration={2000} activeClass="active">
                                        About
                                    </Link>
                                </button>

                                <button>
                                    <Link to={"footerId"} spy={true} smooth={true} offset={-70} duration={2000} activeClass="active">
                                        Contact
                                    </Link>
                                </button>

                                <button onClick={() => { showSignUp() }}>Sign Up</button>

                                <button onClick={() => { showSignIn() }}>Sign In</button>

                                {/* <button onClick={() => { showProfile() }}>User Account</button>

                                <button>Sign Out</button>

                                <button onClick={() => { showHistory() }}>History</button> */}
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

            {isHome && <Home />}
            {/* <Search /> */}
            {isHistory && <CartandLoved setHide={setHide}/>}

            <FooterBar id="footerId">
                <div className="fContainer">
                    <div className="aboutContent">
                        <h2>About Us</h2>
                        <p>A digital library created and developed in 2021, is called E-Library. with exceptional capabilities for managing both contemporary and older electronic libraries. E-Library is being successfully used in tens of thousands of institutions across the country.</p>
                        <p>E-Library is based on cloud computing technology, thus users do not need to install anything in order to use the system anywhere. All they need is an Internet connection. This item is made to fully and optimally satisfy the demands of managers in library management. The System's features are created in accordance with standardized guidelines, completely satisfying the demands of the school library administration profession. A wide range of report forms are specifically provided by the library system, which successfully aids school administrators in the process of overseeing and administering the library.</p>
                        <ul className="social-icon">
                            <li><a href="https://www.facebook.com/tang.weian.7"><FaFacebook className="iconAbout" /></a></li>
                            <li><a href=""><FaTwitter className="iconAbout" /></a></li>
                            <li><a href=""><AiFillInstagram className="iconAbout" /></a></li>
                            <li><a href=""><FaYoutube className="iconAbout" /></a></li>
                        </ul>
                    </div>

                    <div className="contactContent">
                        <h2>Contact</h2>
                        <ul className="info">
                            <li>
                                <span><MdLocationOn className="iconContact" /></span>
                                <span>No. 160, Street 30/4, An Phu Ward, Ninh Kieu District, Can Tho City</span>
                            </li>

                            <li>
                                <span><GiRotaryPhone className="iconContact" /></span>
                                <p><a href="">039 998 9631</a></p>
                            </li>

                            <li>
                                <span><MdEmail className="iconContact" /></span>
                                <p><a href="">haonngcc19117@fpt.edu.vn</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </FooterBar>
        </div>
    );
}

export default HeaderandFooter;

const NavigationBar = styled.div`

    .hContainer {
        display: flex;
        border-bottom: 2px solid black;
        margin-bottom: 0.5px;

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

                    }

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
    }
    ${'' /* Chưa reponsive header */}
`;

const FooterBar = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 0.5px;
    padding: 1% 7%;
    background: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .fContainer{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;

        .content{
            margin-right: 30px;
        }
            
        .aboutContent{
            width: 60%;

            h2{
                position: relative;
                color: var(--color-dark);
                font-weight: bold;
                margin-bottom: 15px;

                &:before{
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 3px;
                background: black;
                }
            }

            p{
                color: var(--color-dark);
                text-align: justify;
                margin-top: 10px;
            }

            .social-icon {
                margin-top: 20px;
                display: flex;

                li {
                list-style: none;

                a {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    background: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-right: 10px;
                    text-decoration: none;
                    border-radius: 4px;

                    &:hover{
                        background: black;
                        color: white;
                        border: 1px solid;
                    }

                    .iconAbout {
                        width: 40px;
                        height: 40px;
                    }
                }
                }
            }
        }

        .contactContent {
            width: calc(35% - 60px);
            margin-right: 0;
            
            h2 {
                position: relative;
                color: var(--color-dark);
                font-weight: bold;
                margin-bottom: 15px;

                &:before{
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 100%;
                height: 3px;
                background: black;
                }
            }

            .info {
                position: relative;

                li {
                display: flex;
                margin-bottom: 16px;

                span:nth-child(1) {
                    color: #fff;
                    font-size: 20px;
                    margin-right: 10px;
                }

                span{
                    color: var(--color-dark);
                    text-align: justify;

                    .iconContact {
                        color: var(--color-dark);
                        background-color: white;
                    }
                }

                p {
                    a {
                        color: var(--color-dark);
                        text-decoration: none;
                    }
                }
            }
        }
    }

    @media  (max-width: 768px){
        padding: 40px;

        .container {
            flex-direction: column;

            .aboutContent{
                width: 100%;

                h2{
                &:before{
                    width: 100%;
                }
                }

                .social-icon {
                margin-top: 10px;
                margin-bottom: 25px;
                }
            }

            .contactContent {
                width: 100%;
                
                h2 {
                position: relative;
                color: var(--color-dark);
                font-weight: bold;
                margin-bottom: 15px;
                }
            }
        }
    }

    @media  (max-width: 600px){
        padding: 40px;

        .container {
            flex-direction: column;

            .aboutContent{
                width: 100%;
                

                .social-icon {
                margin-top: 10px;
                margin-bottom: 25px;
                }
            }

            .contactContent {
                width: 100%;
                
                h2 {
                position: relative;
                color: var(--color-dark);
                font-weight: bold;
                margin-bottom: 15px;
                }
            }
        }
    }
`;