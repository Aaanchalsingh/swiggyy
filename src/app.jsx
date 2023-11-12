import React from 'react';
import Login from './login'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import "./index.css"

function App() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/Home' element={<Home />} />
                <Route exact path='/Cart' element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
