import BooksRow from './BooksRow';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { useScrollYPosition } from 'react-use-scroll-position';

const ScrollToTop = () => {
    scroll.scrollToTop();
}

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

function Content(props) {
    
    const scrollY = useScrollYPosition();

    return (
        <div>
            <BooksRow books={books} title="Book Originals" isEBook={true} sectionId='bookOriginals'/>
            <BooksRow books={books} title="Book Trending"  sectionId='bookTrending'/>
            <BooksRow books={books} title="New Book"  sectionId='newBook'/>
            <GoToTopButton onClick={()=> ScrollToTop() }
                style={{
                    visibility: `${scrollY > 190 ? 'visible' : 'hidden'}`,
                    zIndex: 29
                }}
                >
                <FaArrowAltCircleUp />
            </GoToTopButton>
        </div>
    );
}

export default Content;

const GoToTopButton = styled.div`
    position: fixed;
    z-index: 100;
    right: 50px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(178, 222, 39, 1);
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 0.8);
    }

    @media screen and (max-width: 600px) {
        right: 40px
    }
`;