// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainMovie from "./components/Client/MainMovie/MainMovie.jsx";
import MainSeance from "./components/Client/MainSeance/MainSeance.jsx";
import MainBookTicket from "./components/Client/MainBookTicket/MainBookTicket.jsx";
import MainTicket from "./components/Client/MainTicket/MainTicket.jsx";
import Admin from "./components/Admin/Admin.jsx";
import Login from './components/Admin/Login/Login.jsx';
import AuthRequired from "./components/Admin/AuthRequired/AuthRequired.jsx";




function App() {
  return(
    <BrowserRouter>
      <Routes> 
          <Route path="/" element={<MainMovie/>}/>
          <Route path="seance/:seanceId" element={<MainSeance/>}/>
          <Route path="admin/login" element={<Login/>}/>
          <Route path="booking" element={<MainBookTicket/>}/>
          <Route path="ticket" element={<MainTicket/>}/>
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
