import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './pages/Login';
import RegisterPage from './pages/Register';

function App() {
    return (
        <div>
            <Login />

          <Router>
            <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route path={"/register"} element={<RegisterPage />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;
