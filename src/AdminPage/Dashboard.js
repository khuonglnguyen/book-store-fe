import React from 'react';
import styled from 'styled-components';
import imageBook from "../assets/book.png";
import imageView from "../assets/view.png";
import imageLove from "../assets/love.png";
import imageOrdered from "../assets/ordered.png";
import imageRanking from "../assets/ranking.png";

function Dashboard(props) {
    return (
        <DashboardPanel>
            <div className="dashboardContainer">
                <div className="boxs">
                    <div className="boxBook">
                        <div className="statisticBook">
                            <p>200</p>
                            <h3>Book</h3>
                        </div>

                        <div>
                            <img src={imageBook} alt=""/>
                        </div>
                    </div>

                    <div className="boxView">
                        <div className="statisticView">
                            <p>60.5k</p>
                            <h3>View</h3>
                        </div>

                        <div>
                            <img src={imageView} alt=""/>
                        </div>
                    </div>

                    <div className="boxLove">
                        <div className="statisticLove">
                            <p>60.5k</p>
                            <h3>Love</h3>
                        </div>

                        <div>
                            <img src={imageLove} alt=""/>
                        </div>
                    </div>

                    <div className="boxOrdered">
                        <div className="statisticOrdered">
                            <p>60.5k</p>
                            <h3>Ordered</h3>
                        </div>

                        <div>
                            <img src={imageOrdered} alt=""/>
                        </div>
                    </div>
                </div>


                <div className="statistic-title">
                    <img src={imageRanking} alt=""/>
                    <h3>Book ranking</h3>
                </div>

                <div className="statistic-detail">
                    <table>
                        <thead>
                            <tr>
                                <th>Top</th>
                                <th>Book Title</th>
                                <th>View</th>
                                <th>Love</th>
                                <th>Ordered</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cristiano Ronaldo 1</td>
                                <td>7000000000</td>
                                <td>{7000000000-241}</td>
                                <td>{7000000000/5}</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Cristiano Ronaldo 2</td>
                                <td>7000000000</td>
                                <td>{7000000000-241}</td>
                                <td>{7000000000/5}</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Cristiano Ronaldo 3</td>
                                <td>7000000000</td>
                                <td>{7000000000-2410}</td>
                                <td>{7000000000}</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Cristiano Ronaldo 4</td>
                                <td>7000000000</td>
                                <td>{7000000000-24100}</td>
                                <td>{7000000000/7}</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Cristiano Ronaldo 5</td>
                                <td>7000000000</td>
                                <td>{7000000000-241}</td>
                                <td>{7000000000/5}</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>Cristiano Ronaldo 6</td>
                                <td>7000000000</td>
                                <td>{7000000000-241}</td>
                                <td>{7000000000/5}</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>Cristiano Ronaldo 7</td>
                                <td>7000000000</td>
                                <td>{7000000000-2410}</td>
                                <td>{7000000000}</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Cristiano Ronaldo 8</td>
                                <td>7000000000</td>
                                <td>{7000000000-24100}</td>
                                <td>{7000000000/7}</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>Cristiano Ronaldo 9</td>
                                <td>7000000000</td>
                                <td>{7000000000-241}</td>
                                <td>{7000000000/5}</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>Cristiano Ronaldo 10</td>
                                <td>7000000000</td>
                                <td>{7000000000-241}</td>
                                <td>{7000000000/5}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardPanel>
    );
}

export default Dashboard;

const DashboardPanel = styled.div`
	background-color: #f2f2f2;
	font-family: 'Arial', sans-serif;
	padding: 20px 10px;

    .dashboardContainer {
        display: flex;
        flex-direction: column;
        width: 100%;

        .boxs {
            display: flex;
            flex-direction: row;
            margin-bottom: 5%;
            user-select: none;

            .boxBook, .boxView, .boxLove {
                display: flex;
                flex-direction: row;
                background: linear-gradient(123deg, rgba(227,179,217,1) 0%, rgba(94,94,134,1) 33%, rgba(145,176,149,1) 67%);
                margin-right: 5%;
                width: 21.25%;
                border-radius: 15px;
                text-align: center;
                align-items: center;
                padding: 10px 15px;

                &:hover {
                    transform: scale(1.1);
                }

                .statisticBook, .statisticView, .statisticLove {
                    margin-right: 10px;
                    width: 60%;

                    p {
                        font-size: 50px;
                    }

                    h3 {
                        font-size: 20px;
                    }
                }

                img {
                    height: auto;
                    width: 60%;
                }
            }

            .boxOrdered {
                display: flex;
                flex-direction: row;
                background: linear-gradient(123deg, rgba(227,179,217,1) 0%, rgba(94,94,134,1) 33%, rgba(145,176,149,1) 67%);
                width: 21.25%;
                border-radius: 15px;
                text-align: center;
                align-items: center;
                padding: 10px 15px;

                &:hover {
                    transform: scale(1.1);
                }

                .statisticOrdered {
                    margin-right: 10px;
                    width: 60%;

                    p {
                        font-size: 50px;
                    }

                    h3 {
                        font-size: 20px;
                    }
                }

                img {
                    height: auto;
                    width: 60%;
                }
            }    
        }

        .statistic-title {
            display: flex;
            flex-direction: row;
            overflow: hidden;
            user-select: none;
            margin-bottom: 10px;
            align-items: flex-end;

            img {
                height: 50px;
                width: 50px;
                margin-right: 10px;
            }

            h3 {
                font-size: 24px;
                font-weight: bold;
                text-decoration: underline;
            }
        }
        
        .statistic-detail {
            width: 100%;

            table {
                width: 100%;
                border-collapse: collapse;
                margin: 0 auto;

                thead {
                    background: linear-gradient(123deg, rgba(49,20,180,1) 0%, rgba(8,112,107,1) 33%, rgba(30,102,39,1) 67%);
                    user-select: none;
                    
                    tr {
                        th {
                            color: #ffffff;
                            font-weight: bold;
                            text-align: left;
                            padding: 12px;
                            border: 2px solid var(--color-dark);
                            text-align: center;

                            &:nth-child(1) {
                                width: 5%;
                            }

                            &:nth-child(2) {
                                width: 50%;
                            }

                            &:nth-child(3) {
                                width: 15%;
                            }

                            &:nth-child(4) {
                                width: 15%;
                            }

                            &:nth-child(5) {
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

                            &:nth-child(1) {
                                user-select: none;
                            }

                            &:nth-child(3) {
                                user-select: none;
                            }

                            &:nth-child(4) {
                                user-select: none;
                            }

                            &:nth-child(5) {
                                user-select: none;
                            }
                        }
                    }
                }
            }
        }
    }
`;