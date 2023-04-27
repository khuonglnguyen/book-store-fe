import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from '../utils';
import { useViewport } from '../hooks';
import BookDetail from "../BookDetail/BookDetail";

function BooksRow(props) {
  const { books, title, isEBook, sectionId } = props;
  const sliderRef = useRef();
  const bookRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [windowWidth] = useViewport();

  // show and hide book detail
  const [isShowDetail, setShowDetail] = useState(false);
  const showDetail = () => {
    setShowDetail(true);
  }
  function setHide(setup) {
    setShowDetail(setup);
  }

  const handleScrollRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(sliderRef.current, 
        250, 
        bookRef.current.clientWidth * 2, 
        sliderRef.current.scrollLeft)
    };
    
  }

  const handleScrollLeft = () => {    
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(sliderRef.current, 
        250, 
        -bookRef.current.clientWidth * 2, 
        sliderRef.current.scrollLeft)
    };
    
  }

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag])

  const onDragStart = e => {
    setIsDrag(true);
    setDragDown(e.screenX)
  }

  const onDragEnd = e => {
    setIsDrag(false);
  }

  const onDragEnter = e => {
    setDragMove(e.screenX)
  }

  return (
      <BookRowContainer draggable='false' id={sectionId}>
        {isShowDetail && <BookDetail setHide={setHide} />}
        <h1 className="heading">{title}</h1>

        <BookSlider ref={sliderRef} 
          draggable='true' 
          onDragStart={onDragStart} 
          onDragEnd={onDragEnd} 
          onDragEnter={onDragEnter}
          style={
            books && books.length > 0 ? {
              gridTemplateColumns: `repeat(${books.length}, ${windowWidth > 1200 ? '310px' 
              : windowWidth > 992 ? '260px' 
              : windowWidth > 768 ? '210px' 
              : '260px'})`
            } : {}
          }>
          {
            books.map((book, index) => (
              <div key={index} className="bookItem" ref={bookRef} draggable='false' onClick={() => {showDetail()}}>
                <img src={book} alt="" draggable='false' />

                <div className="bookTitle">Book Title</div>
              </div>
            ))
          }
        </BookSlider>

        <div className={`btnPrev ${isEBook && 'isEBook'}`} onClick={handleScrollLeft} >
          <FiChevronLeft />
        </div>

        <div className={`btnNext ${isEBook && 'isEBook'}`} onClick={handleScrollRight} >
          <FiChevronRight />
        </div>
      </BookRowContainer>
    );
}

export default BooksRow;

const BookRowContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 18px;
    user-select: none;
  }

  .btnPrev {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }

    &.isEBook {
      height: 100px;
      width: max-content;
    }
  }

  .btnNext {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }

    &.isEBook {
      height: 100px;
      width: max-content;
    }
  }
`;

const BookSlider = styled.div`
  display: grid;
  gap: 6px;
  ${'' /* grid-template-columns: repeat(${books.length}, 310px); */}
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  ${'' /* @media screen and (max-width: 1200px) {
  grid-template-columns: repeat(${books.length}, 260px);
  }

  @media screen and (max-width: 992px) {
  grid-template-columns: repeat(${books.length}, 210px);
  }

  @media screen and (max-width: 768px) {
  grid-template-columns: repeat(${books.length}, 160px);
  } */}

  &:hover .bookItem {
    opacity: 0.3;
  }

  .bookItem {
    transform: scale(1);
    max-width: 300px;
    max-height: 400px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
      obj-fit: cover;
    }

    .bookTitle {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.65)
    }
  }
`;