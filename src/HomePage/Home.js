import React from 'react';
import Intro  from "./Intro";
import Content from "./Content";
import Menu from "../Menu/Menu";

function Home(props) {
    return (
        <div>
            <Intro />
            <Menu />
            <Content />
        </div>
    );
}

export default Home;