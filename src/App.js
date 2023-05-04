// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "./components/Admin/Admin.jsx";
import Login from './components/Admin/Login/Login.jsx';
import AuthRequired from "./components/Admin/AuthRequired/AuthRequired.jsx";
// import NotFound from "./components/NotFound/NotFound.jsx";
import './App.css';
import './css/normalize.css';
import './css/styles.scss';



function App() {
  return(
    <BrowserRouter>
      <Routes> 
          {/* <Route path="/" element={<MainMovie/>}/> */}
          <Route path="admin/login" element={<Login/>}/>
          <Route
                    path="admin"
                    element={
                        <AuthRequired>
                            <Admin/>
                         </AuthRequired>
                    }
          />
        </Routes>
        </BrowserRouter>
      );
}

export default App;
