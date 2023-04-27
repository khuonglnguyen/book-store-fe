import React, { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import styled from "styled-components";
import Add from './Add';
import Update from './Update';
import Delete from '../Delete';
import axios, * as others from "axios";


function Author(props) {
    const [authors] = useState([
        {
            author: 'Cristiano Ronaldo',
            dob: '02/05/1985',
            desc: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        },
        {
            author: 'Cristiano Ronaldo',
            dob: '02/05/1985',
            desc: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        },

        {
            author: 'Cristiano Ronaldo',
            dob: '02/05/1985',
            desc: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        }
    ]);


    const [isAdd, setAdd] = useState(false);
    const [isUpdate, setUpdate] = useState(false);
    const [isDelete, setDelete] = useState(false);

    const showAdd = () => {
        setAdd(true);
        // var config = {
        //     method: 'post',
        //     url: 'https://data.mongodb-api.com/app/data-qwthr/endpoint/data/v1/action/findOne',
        //     headers:
        //     {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        //         'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
        //         'api-key': 'as4hkVXUVeTTuJpYvAqM4iq4XOlwruNHj7DLmPifsXv4rzNlkheApRDuoyIEwDk7'
        //     },
        //     // new Headers({
        //     //     'Content-Type': 'application/json',
        //     //     'Accept': 'application/json',
        //     //     'Access-Control-Allow-Origin': '*',
        //     //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        //     //     'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
        //     //     'api-key': 'as4hkVXUVeTTuJpYvAqM4iq4XOlwruNHj7DLmPifsXv4rzNlkheApRDuoyIEwDk7'
        //     //   }),
        //     data: data
        // };

        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
        <AuthorManagement>
            {isAdd && <Add setHide={setHide} />}
            {isUpdate && <Update setHide={setHide} />}
            {isDelete && <Delete setHide={setHide} />}

            <h1>Author Management</h1>

            <div className="grAdd" onClick={() => { showAdd() }}>
                <p className="btnAdd"><IoIosAddCircle /></p>
                <p className="textAdd">Add new a author</p>
            </div>

            <div className="table">
                <div className="thead">
                    <div className="content cntTitle">Author</div>
                    <div className="content cntTitle">Date of Birth</div>
                    <div className="content cntTitle">Description</div>
                    <div className="content cntTitle">Edit</div>
                    <div className="content cntTitle">Delete</div>
                </div>

                {authors.map((author, index) => (
                    <div className="tbody" key={index}>
                        <div className="content">{author.author}</div>
                        <div className="content">{author.dob}</div>
                        <div className="content cntDescription">{author.desc}</div>
                        <div className="content"><MdEdit className='btn' size={30} onClick={() => { showUpdate() }} /></div>
                        <div className="content"><MdDelete className='btn' size={30} onClick={() => { showDelete() }} /></div>
                    </div>))}
            </div>
        </AuthorManagement>
    );
}

export default Author;

const AuthorManagement = styled.div`
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