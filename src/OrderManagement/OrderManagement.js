import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import Delete from '../Delete';

function Order(props) {
    const [orders] = useState([
        {
            orderer: 'The Fan',
            BookandAmount: 'Cristiano Ronaldo x 2',
            totalPrice: '800$',
            address: 'Can Tho',
            phoneNumber: '0399989631',
            description: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        },
        {
            orderer: 'The Fan',
            BookandAmount: 'Cristiano Ronaldo x 2',
            totalPrice: '800$',
            address: 'Can Tho',
            phoneNumber: '0399989631',
            description: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        },        {
            orderer: 'The Fan',
            BookandAmount: 'Cristiano Ronaldo x 2',
            totalPrice: '800$',
            address: 'Can Tho',
            phoneNumber: '0399989631',
            description: 'Cristiano Ronaldo is the most outstanding and comprehensive footballer in the history of the world. He is a shining example of grit and determination. "Siu" is the ideology he created.'
        },
    ]);

    const [isDelete, setDelete] = useState(false);

    const showDelete = () => {
        setDelete(true);
    }

    function setHide(setup) {
        setDelete(setup);
    }

    return (
        <OrderManagement>
            {isDelete && <Delete setHide={setHide}/>}
            <h1>Order Management</h1>

            <div className="table">
                <div className="thead">
                    <div className="content cntTitle">No</div>
                    <div className="content cntTitle">Orderer</div>
                    <div className="content cntTitle">Book and Amount</div>
                    <div className="content cntTitle">Total price</div>
                    <div className="content cntTitle">Address</div>
                    <div className="content cntTitle">Phone number</div>
                    <div className="content cntTitle">Description</div>
                    <div className="content cntTitle">Delete</div>
                </div>

                {orders.map((order, index) => (
                <div className="tbody" key={index}>
                    <div className="content">{index + 1}</div>
                    <div className="content">{order.orderer}</div>
                    <div className="content">{order.BookandAmount}<br/>{order.BookandAmount}</div>
                    <div className="content">{order.totalPrice}</div>
                    <div className="content cntAddress">{order.address}</div>
                    <div className="content">{order.phoneNumber}</div>
                    <div className="content cntDescription">{order.description}</div>
                    <div className="content"><MdDelete size={30} className='btn' onClick={() => {showDelete()}}/></div>
                </div>))}
            </div>
        </OrderManagement>
    );
}

export default Order;

const OrderManagement = styled.div`
    padding: 0;

    h1 {
        font-size: 28px;
        text-align: center;
        margin-bottom: 30px;
		padding-top: 30px;
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
            min-width: 160px;
            min-height: 100%;
            text-align: center;
            border-bottom: 1px solid var(--color-dark);
        }

        .cntAddress, .cntDescription {
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