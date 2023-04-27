import { FaHome, FaHotjar, FaBook } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { HiInformationCircle, HiTrendingUp } from 'react-icons/hi';
import styled from 'styled-components';
import MenuItem from './MenuItem';

function Menu(props) {
    return (
        <MenuPane>
            {/* <MenuItem name="Home" Icon={FaHome} to='home'/> */}
            <MenuItem name="Book Originals" Icon={FaHotjar} to='bookOriginals'/>
            <MenuItem name="Book Trending" Icon={HiTrendingUp} to='bookTrending'/>
            <MenuItem name="New Book" Icon={FaBook}  to='newBook'/>
            <MenuItem name="About" Icon={HiInformationCircle} to='footerId'/>
            <MenuItem name="Contact" Icon={MdContactPhone} to='footerId'/>
        </MenuPane>
    );
}

export default Menu;

const MenuPane = styled.div`
    position: fixed;
    left: 0;
    top: 30%;
    width: 46px;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transform-origin: left center;
    transition: all 0.3s linear;
    overflow: hidden;
    border-radius: 3%;

    &:hover {
        width: 11.5vw;
        ${'' /* width: auto; */}
        background: rgba(0, 0, 0, 0.6);
    }

    .menu {
        display: flex;
        align-items: center;
        width: max-content;
        margin-left: 2px;
        padding: 0 6px;
        cursor: pointer;
        text-transform: capitalize;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        button {
            font-size: 16px;
            font-weight: 400;
            color: #fff;
            background: transparent;
            cursor: pointer;
            height: auto;
            width: 8vw;
            height: 46px;

            &:hover {
                background: #ffffff33;
            }
        }
    }
`;