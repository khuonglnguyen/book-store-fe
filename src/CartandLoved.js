import React, { useState } from 'react';
import styled from 'styled-components';

function CartandLoved(props) {
    const [orderList] = useState([
        {booktitle: 'Cristiano Ronaldo', price: 8, amount: '1', total: ''}, 
        {booktitle: 'Cristiano Ronaldo', price: 8, amount: '1', total: ''}, 
        {booktitle: 'Cristiano Ronaldo', price: 8, amount: '1', total: ''}
    ]);

    return (
        <CartandLovedPanel>
            <div className="container">
                <div className="group">
                    <h1>Book list</h1>

                    <div className="bookList">
                        <div className="thead">
                            <div className="cnt">Book Title</div>
                            <div className="cnt">Price</div>
                            <div className="cnt">Amount</div>
                            <div className="cnt">Total price</div>
                            <div className="cnt">Action</div>
                        </div>

                        {orderList.map((order, index) => (
                        <div className="tbody" key={index}>
                            <div className="cnt cntBooktitle">{order.booktitle}</div>
                            <div className="cnt">{order.price} $</div>
                            <div className="cnt"><input type="number" placeholder={order.amount}/></div>
                            <div className="cnt">{order.price * order.amount} $</div>
                            <div className="cnt"><button>Order</button></div>
                        </div>))}
                    </div>
                </div>

                <div className="group">
                    <h1>Loved history</h1>

                    <div className="lovedList">
                        <div className="thead">
                            <div className="cnt booktile">Book Title</div>
                            <div className="cnt action">Action</div>
                        </div>

                        {orderList.map((order, index) => (
                        <div className="tbody" key={index}>
                            <div className="cnt bookTitle">{order.booktitle}</div>
                            <div className="cnt action"><button>Read this book</button></div>
                        </div>))}
                    </div>
                </div>
                <div className="group">
                    <h1>Ordered history</h1>

                    <div className="statistic-detail">
                        <table>
                            <thead>
                                <tr>
                                    <th>Book Title</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                    <th>Total price</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Cristiano Ronaldo 1</td>
                                    <td>8 $</td>
                                    <td>2</td>
                                    <td>16 $</td>
                                </tr>

                                <tr>
                                    <td>Cristiano Ronaldo 1</td>
                                    <td>8 $</td>
                                    <td>2</td>
                                    <td>16 $</td>
                                </tr>

                                <tr>
                                    <td>Cristiano Ronaldo 1</td>
                                    <td>8 $</td>
                                    <td>2</td>
                                    <td>16 $</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </CartandLovedPanel>
    );
}

export default CartandLoved;

const CartandLovedPanel = styled.div`
    
    .container {
        background: rgba(249, 255, 255, 1);
        width: 100%;
        padding: 20px 10%;

        .group {
            display: flex;
            flex-direction: column;
            width: 100%;

            h1 {
                font-size: 24px;
                text-transform: uppercase;
                user-select: none;
                margin-bottom: 10px;
            }

            .bookList, .lovedList {
                display: flex;
                flex-direction: column;
                width: 100%;
                font-size: 16px;
                margin-bottom: 30px; 

                .thead {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    border-bottom: 1px solid var(--color-dark);
                    padding: 5px;
                    user-select: none;
                }

                .tbody {
                    display: flex;
                    flex-direction: row;
                    border-bottom: 1px solid var(--color-dark);
                    padding: 5px;
                }

                .cnt {
                    text-align: center;
                    width: 100%;
                }

                .cntBooktitle {
                    text-align: justify;
                }

                input {
                    text-align: center;
                }

                .booktitle, .bookTitle {
                    width: 80%;
                }

                .bookTitle {
                    text-align: justify;
                }
                
                .action {
                    width: 20%;
                }

                button {
                    width: 100%;
                    cursor: pointer;
                    background: var(--color-dark);
                    color: #fff;
                    border-radius: 3px;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }

        .statistic-detail {
            width: 100%;

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 0 auto;

                thead {
                    user-select: none;
                    
                    tr {
                        th {
                            color: var(--color-dark);
                            font-weight: bold;
                            text-align: left;
                            padding: 12px;
                            border-top: 1px solid var(--color-dark);
                            border-bottom: 1px solid var(--color-dark);
                            text-align: center;

                            &:nth-child(1) {
                                width: 55%;
                            }

                            &:nth-child(2) {
                                width: 15%;
                            }

                            &:nth-child(3) {
                                width: 15%;
                            }

                            &:nth-child(4) {
                                width: 15%;
                            }
                        }
                    }
                }

                tbody {
                    tr{
                        &:nth-child(even) {
                            background-color: #f1f9f9;
                        }
                        
                        &:nth-child(odd) {
                            background-color: #ffffff;
                        }

                        &:hover {
                            background-color: rgba(72, 113, 247, 1);
                        }

                        td {
                            text-align: center;
                            padding: 10px;
                            border-bottom: 1px solid rgba(132, 140, 207, 1);

                            &:nth-child(2) {
                                user-select: none;
                            }

                            &:nth-child(3) {
                                user-select: none;
                            }

                            &:nth-child(4) {
                                user-select: none;
                            }

                        }
                    }
                }
            }
        }
    }
`;