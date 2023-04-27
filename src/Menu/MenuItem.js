import { radomRGBA } from '../utils';
import { Link } from 'react-scroll';

function MenuItem(props) {
    const { name, Icon, to } = props;
    return (
            <Link className='menu'
                to={to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active">
                <Icon className='icon' style={{color: radomRGBA(1)}}/>
                <button>{name}</button>
            </Link>
    );
}

export default MenuItem;