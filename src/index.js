import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import StrudelDemo from "./StrudelDemo";
import FavouriteSong from "./components/FavouriteSongList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/create" element={<StrudelDemo />} />
                <Route path="/favourites" element={<FavouriteSong/>}/>
            </Routes>
            
        </HashRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
