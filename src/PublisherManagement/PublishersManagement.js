import React, { useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";
import Add from './Add';
import Update from './Update';
import Delete from '../Delete';

function Publisher(props) {
    const [publishers] = useState([
        {
            publisher: 'Cristiano Ronaldo',
            address: 'Portugal',
            description: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        },
        {
            publisher: 'Cristiano Ronaldo',
            address: 'Portugal',
            description: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        },

        {
            publisher: 'Cristiano Ronaldo',
            address: 'Portugal',
            description: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
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
        <PublisherManagement>
            {isAdd && <Add setHide={setHide} />}
            {isUpdate && <Update setHide={setHide} />}
            {isDelete && <Delete setHide={setHide} />}

            <h1>Publisher Management</h1>

            <div className="grAdd" onClick={() => {showAdd()}}>
                <p className="btnAdd"><IoIosAddCircle /></p>
                <p className="textAdd">Add new a publisher</p>
            </div>

            <div className="table">
                <div className="thead">
                    <div className="content cntTitle">Publisher</div>
                    <div className="content cntTitle">Address</div>
                    <div className="content cntTitle">Description</div>
                    <div className="content cntTitle">Edit</div>
                    <div className="content cntTitle">Delete</div>
                </div>

                {publishers.map((publisher, index) => (
                    <div className="tbody" key={index}>
                        <div className="content">{publisher.publisher}</div>
                        <div className="content">{publisher.address}</div>
                        <div className="content cntDescription">{publisher.description}</div>
                        <div className="content"><MdEdit className='btn' size={30} onClick={() => {showUpdate()}}/></div>
                        <div className="content"><MdDelete className='btn' size={30} onClick={() => {showDelete()}}/></div>
                    </div>))}
            </div>
        </PublisherManagement>
    );
}

export default Publisher;

const PublisherManagement = styled.div`
    padding: 0;

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
        margin-bottom: 10px;
        margin-left: 10px;

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
            width: 100%;
            height: 100%;
            min-width: 230px;
            min-height: 100%;
            text-align: center;
            border-bottom: 1px solid var(--color-dark);
        }

        .cntDescription {
            overflow: auto;
            text-align: justify;
        }
    }

    .btn {
        cursor: pointer;
        color: var(--color-dark);
        background: #f1f1f1;
        overflow: hidden;
    }
`;