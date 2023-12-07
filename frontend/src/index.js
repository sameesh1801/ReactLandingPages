import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landingpage from './zerodha/landingpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './Components/NoPage'
import Nav from './Components/Nav/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Nav />}/>
            <Route path="zerodha" element={<Landingpage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);