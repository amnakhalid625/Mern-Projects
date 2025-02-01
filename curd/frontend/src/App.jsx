// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Moral from './components/Moral'

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navbar />} />
<Route path='/modal' element={<Moral/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
