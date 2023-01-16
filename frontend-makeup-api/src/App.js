import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFavorites from "./components/MyFavorites";
import AllDataAPI from "./components/AllDataAPI";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<MyFavorites />} />
          <Route exact path="/getAPIData" element={<AllDataAPI />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
