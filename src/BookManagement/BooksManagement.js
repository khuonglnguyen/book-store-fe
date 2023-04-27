import React, { useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";
import Add from './Add';
import Update from './Update';
import Manage from './BooksManagement';
import Delete from './Delete';

function Book(props) {
    const [books] = useState([
        {
            booktitle: 'Dac Nhan Tam 1',
            category: 'Life',
            description: 'Dale Carnegie - Winning the Heart is the book of all time and an astonishing phenomenon in the American publishing industry. For the next several decades and to this day, this work has remained at number one on bestseller lists and became a unique event in the history of the world publishing industry and is recognized Considered one of the most influential books of all time.',
            price: '$10.00',
            author: 'Dale Carnegie',
            publisher: 'First News - Self-Help',
            image: '',
            content: 'abc.pdf',
            view: '10.000',
            love: '9.800'
        },

        {
            booktitle: 'Dac Nhan Tam 2',
            category: 'Life',
            description: 'Dale Carnegie - Winning the Heart is the book of all time and an astonishing phenomenon in the American publishing industry. For the next several decades and to this day, this work has remained at number one on bestseller lists and became a unique event in the history of the world publishing industry and is recognized Considered one of the most influential books of all time.',
            price: '$10.00',
            author: 'Dale Carnegie',
            publisher: 'First News - Self-Help',
            image: '',
            content: 'abc.pdf',
            view: '10.000',
            love: '9.800'
        }
    ]);

    const [isAdd, setAdd] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [isDelete, setDelete] = useState(false);

    const showAdd = () => {
        setAdd(true);
    }

    const showUpdate = () => {
        setUpdate(true);
    }
    
    const showDelete = () => {
        setDelete(true);
    }

    function setHide(setup) {
        setAdd(setup);
        setUpdate(setup);
        setDelete(setup);
    }

    return (
        <BookManagement>
            <div class="scrollPopup" style={{display: isAdd ? 'block' : 'none'}}>{isAdd && <Add setHide={setHide} />}</div>
            <div class="scrollPopup" style={{display: isUpdate ? 'block' : 'none'}}>{isUpdate && <Update setHide={setHide} />}</div>
            {isDelete && <Delete setHide={setHide} />}
            <h1>Book Management</h1>

            <div className="grAdd" onClick={() => {showAdd()}}>
                <p className="btnAdd"><IoIosAddCircle /></p>
                <p className="textAdd">Add new a book</p>
            </div>

            <div className="table">
                <div className="thead">
                    <div className="content cntTitle">Book Title</div>
                    <div className="content cntTitle">Category</div>
                    <div className="content cntTitle">Author</div>
                    <div className="content cntTitle">Publisher</div>
                    <div className="content cntTitle">Description</div>
                    {/* <div className="content cntTitle">Content</div> */}
                    {/* <div className="content cntTitle">Price</div> */}
                    <div className="content cntTitle">View</div>
                    <div className="content cntTitle">Love</div>
                    {/* <div className="content cntTitle">Image</div> */}
                    <div className="content cntTitle">Edit</div>
                    <div className="content cntTitle">Delete</div>
                </div>

                {books.map((book, index) => (
                    <div className="tbody" key={index}>
                        <div className="content">{book.booktitle}</div>
                        <div className="content">{book.category}</div>
                        <div className="content">{book.author}</div>
                        <div className="content">{book.publisher}</div>
                        <div className="content cntDescription">{book.description}</div>
                        {/* <div className="content">{book.content}</div> */}
                        {/* <div className="content">{book.price}</div> */}
                        <div className="content">{book.view}</div>
                        <div className="content">{book.love}</div>
                        {/* <div className="content">{book.image}</div> */}
                        <div className="content"><MdEdit size={30} className="btnEdit" onClick={() => {showUpdate()}} /></div>
                        <div className="content"><MdDelete size={30} className="btnDelete" onClick={() => {showDelete()}} /></div>
                    </div>))}
            </div>
        </BookManagement>
    );
}

export default Book;

const BookManagement = styled.div`
    position: relative;
    padding: 0;

    .scrollPopup::-webkit-scrollbar{
        display: none;
    }

    .scrollPopup {
        top: 0;
        left: 0;
        position: absolute;
        overflow-y: scroll;
        scrollbar-width: none;
        width: 100%;
        height: 86vh;
    }

    h1 {
        font-size: 28px;
        text-align: center;
        margin-bottom: 10px;
		padding-top: 30px;
    }

    .grAdd {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        width: fit-content;
        margin-left: 10px;
        margin-bottom: 10px;

        &:hover {
            transform: scale(1.1);
            font-weight: bold;
        }

        .btnAdd {
            color: green;
            font-size: 24px;
            margin-right: 5px;
        }

        .textAdd {
            font-size: 16px;
        }
    }

    .table {
        width: 98%;
        display: flex;
        flex-direction: column;
        margin: 0 1%;

        .thead {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-weight: bold;

            .cntTitle {
                border-top: 1px solid var(--color-dark);
            }
        }

        .tbody {
            width: 100%;
            height: 150px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        .content {
            padding: 10px 0;
            width: 200px;
            height: 100%;
            min-width: 100px;
            min-height: 100%;
            text-align: center;
            border-bottom: 1px solid var(--color-dark);
        }

        .cntDescription {
            overflow: auto;
            text-align: justify;
        }

        .btnEdit, .btnDelete {
            cursor: pointer;
        }
    }
`;