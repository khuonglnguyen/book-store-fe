import React, { useState } from 'react';
import styled from "styled-components";
import Dashboard from './Dashboard';
import Book from '../BookManagement/BooksManagement';
import Author from '../AuthorManagement/AuthorsManagement';
import Category from '../CategoryManagement/CategoriesManagement';
import Publisher from '../PublisherManagement/PublishersManagement';
import Order from '../OrderManagement/OrderManagement';


function AdminPage(props) {
  const [isDash, setDash] = useState(true);
  const [isBook, setBook] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [isCate, setCate] = useState(false);
  const [isPub, setPub] = useState(false);
  const [isOrder, setOrder] = useState(false);

  const showStat = () => {
    setDash(true);
    setBook(false);
    setAuth(false);
    setPub(false);
    setCate(false);
    setOrder(false);
  }

  const showBook = () => {
    setDash(false);
    setBook(true);
    setAuth(false);
    setPub(false);
    setCate(false);
    setOrder(false);
  }

  const showAuth = () => {
    setDash(false);
    setBook(false);
    setAuth(true);
    setPub(false);
    setCate(false);
    setOrder(false);
  }

  const showCate = () => {
    setDash(false);
    setBook(false);
    setAuth(false);
    setPub(false);
    setCate(true);
    setOrder(false);
  }

  const showPub = () => {
    setDash(false);
    setBook(false);
    setAuth(false);
    setPub(true);
    setCate(false);
    setOrder(false);
  }

  const showOrder = () => {
    setDash(false);
    setBook(false);
    setAuth(false);
    setPub(false);
    setCate(false);
    setOrder(true);
  }

  return (
    <AdminPane>
      <div className="container">
        <header className="header">
          <h2>ELECTRONIC LIBRARY</h2>

          <div className="infor">
            <div className="account">
              <p className="accountTitle">Account:</p>
              <p className="accountContent">Admin</p>
            </div>
            
            <div className="img">
              <img src="https://i.pinimg.com/236x/b5/b9/9f/b5b99fda3d83ef808446dcdb6b7187e0.jpg" />
            </div>
          </div>
        </header>

        <section>
          <nav>
            <button onClick={() => {showStat()}}>Dashboard</button>
            <button onClick={() => {showBook()}}>Book</button>
            <button onClick={() => {showAuth()}}>Author</button>
            <button onClick={() => {showCate()}}>Category</button>
            <button onClick={() => {showPub()}}>Publisher</button>
            <button onClick={() => {showOrder()}}>Order</button>
            <button >Sign Out</button>
          </nav>

          <article>
            {isDash && <Dashboard />}
            {isBook && <Book />}
            {isAuth && <Author />}
            {isCate && <Category />}
            {isPub && <Publisher />}
            {isOrder && <Order />}
          </article>
        </section>

        <footer>
          <p>Copyright @2023 by Nguyen Nhat Hao</p>
        </footer>
      </div>
    </AdminPane>
  );
}

export default AdminPage;

const AdminPane = styled.div`
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    
    .container{
      height: 80vh;
      background: #fff;

      .header{
        background: linear-gradient(123deg, rgba(11,11,29,1) 33%, rgba(83,12,68, 1) 67%, rgba(7,84,18,1) 100%);
        display: flex;
        justify-content: space-between;
        padding: 0px 3vw;
        align-items: center;
        height: 15vh;

        h2 {
          white-space: nowrap;
          color: white;
          font-size: 45px;
          user-select: none;
        }

        .infor {
          display: flex;
          flex-direction: row;

          .account {
            display: flex;
            flex-direction: row;
            color: #fff;
            align-items: center;
            margin-right: 30px;
            user-select: none;

            .accountTitle {
              margin-right: 10px;
            }

            .accountContent {
              cursor: pointer;
              text-decoration: underline;

              &:hover {
                transform: scale(1.1);
                background: -webkit-linear-gradient(white, gray);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }

          .img{
            width: 8vh;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 3.8px solid #eee;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
      }

      section {
        display: flex;
        height: 100%;

        nav {
          width: 15vw;
          height: 100%;
          display: flex;
          background-color: #000;
          flex-direction: column;

          button {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            font-weight: bold;
            border-bottom: 1px solid #ffffff33;
            width: 100%;
            height: 50px;
            font-size: 1.2rem;
            color: #fff;
            background: #000;
            cursor: pointer;
            
            &:hover {
              background: #ffffff33;
            }
          }
        }

        article {
          overflow: auto;
          float: left;
          ${'' /* padding: 20px; */}
          width: 100%;
          background-color: #f1f1f1;
          height: 100%;
          word-wrap: break-word;
        }      
      }

      footer {
        background-color: #777;
        padding: 10px;
        text-align: center;
        color: white;
        height: 5vh;
        user-select: none;
      }
    }
`;