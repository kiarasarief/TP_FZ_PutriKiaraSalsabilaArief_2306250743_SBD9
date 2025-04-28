import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import CounterDemo from "./components/CounterDemo";
import Footer from "./components/Footer";
import articles from "./data/articles";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-light-cream dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div id="articles">
                  <CardGrid articles={articles.results} />
                </div>
              </>
            }
          />
          <Route path="/counter" element={<CounterDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
