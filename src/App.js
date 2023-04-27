import "./App.css";
import React, { Component } from 'react';
import Header from "./Header&Footer/Header";
import Footer from "./Header&Footer/Footer";
import HeaderandFooter from "./Header&Footer/HeaderandFooter";
import Search from "./SearchPage/Search";
import Home from "./HomePage/Home";
// import { BrowserRoute, Routes, Route } from 'react-router-dom';
import UpdateProfile from "./Account/UpdateProfile";
import AdminPage from "./AdminPage/AdminPage";
import zBookDetail from "./zDraft/BookDetail";
import BookDetail from "./BookDetail/BookDetail";
import BookView from "./BookDetail/BookView";
import OrderBook from "./OrderManagement/OrderBook";
import CartandLoved from "./CartandLoved";

function App() {
  return ( 
    <div className = "App" > 
      {/* <BrowserRoute>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRoute> */}

      <HeaderandFooter/>
      {/* <Search /> */}
      {/* <BookView />  */}
      {/* <AdminPage />  */}
      </div>
  );
}

export default App;