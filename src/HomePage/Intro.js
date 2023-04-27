import styled from "styled-components";
import ReactPlayer from "react-player";
import {VscUnmute, VscMute} from 'react-icons/vsc';
import { useState } from 'react';

function Intro(props) {
    const [isMuted, setIsMuted]= useState(false);

    return(
        <IntroContainer>
            <ReactPlayer 
                playing={true}
                loop={true}
                width="100%"
                height="900px"
                volume={0.3}
                muted={isMuted}
                url="https://www.youtube.com/watch?v=e7VqeGptsZ0"
                className="videoIntro"
            />

            <div className="infoIntro">
                <h1 className="headingIntro">Electronic Library Web</h1>
                <p className="overviewIntro">Electronic Library Web provides a great tool to access an infinite source of documents and quickly search.</p>
            </div>

            {
                isMuted ? (
                    <VscMute className="btnVolume"
                        onClick={() => setIsMuted(prev => !prev)}
                    />                    
                ) : (
                    <VscUnmute className="btnVolume"
                        onClick={() => setIsMuted(prev => !prev)}
                    />
                )
            }

            <div className="fadeBottom"></div>

        </IntroContainer>
    );
}

export default Intro;

const IntroContainer = styled.div`
    background-color: black;
    position: relative;
    color: black;
    padding-top: 56%;

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
    }

    .infoIntro {
        position: absolute;
        top: 140px;
        left: 70px;

        @media screen and (max-width: 800px){
            top: 120px;
            left: 25px;
        }

        @media screen and (max-width: 600px){
            top: 100px;
            left: 15px;
        }

        .headingIntro {
            font-size: 60px;
            transition: all 0.3 ease;

            @media screen and (max-width: 800px){
                font-size: 40px;
            }

            @media screen and (max-width: 600px){
                font-size: 24px;
            } 
        }

        .overviewIntro {
            max-width: 550px
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;

            @media screen and (max-width: 800px){
                font-size: 16px;
            }

            @media screen and (max-width: 600px){
                font-size: 14px;
            } 
        }
    }

    .btnVolume {
        position: absolute;
        height: 40px;
        width: 40px;
        right: 10%;
        top: 50%;
        cursor: pointer;
        border-radius: 50%;
        padding: 6px;
        color: #bbb;
        border: #fff solid 1px;
        transition: all 0.3s ease;
        transform: scale(1);
        &:hover {
            color: #fff;
            transform: scale(1.2);
            background-color: rgba(211, 211, 211, 0.18);
        }

        @media screen and (max-width: 800px){
            height: 30px;
            width: 30px;
            padding: 4px;
        }

        @media screen and (max-width: 600px){
            height: 20px;
            width: 20px;
            padding: 1px;
        } 
    }

    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15, 15, 15, 0.6) 40%,
            rgb(17, 17, 17),
            rgb(17, 17, 17)
        )
    }
`;