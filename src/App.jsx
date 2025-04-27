import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import articles from "./data/articles";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-cream dark:bg-gray-900">
      <Navbar />
      <Header />
      <div id="articles">
        <CardGrid articles={articles.results} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
