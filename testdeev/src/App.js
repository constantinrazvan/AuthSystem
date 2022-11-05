import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/HomePage';

function App() {
    return (
        <div>
          <Router>
              <Routes>
                <Route path={"/loginpage"} element={<Login />} />
                <Route path={"/registerpage"} element={<RegisterPage />} />
                <Route path={"/homepage"} element={<HomePage />} />
              </Routes>
          </Router>
        </div>
    );
}

export default App;
