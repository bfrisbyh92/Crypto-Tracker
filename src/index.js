import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { useParams } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Currencies from './Components/Currencies'
import Main from './Components/Main'
import Price from './Components/Price'
import Nav from './Components/Nav'

const root = ReactDOM.createRoot(document.getElementById('root'));
    // const params = useParams()
root.render(
    <Router>
      <Nav />
      <Routes >
        <Route path="/" element={<App />} >
          <Route index element={<Main />} />
          <Route path="currencies/" element={<Currencies />} />
          <Route path="price/" element={<Price />} >
            <Route path=":symbol" element={<Price />} />
          </Route>
        </Route>
      </Routes>
    </Router>
);

