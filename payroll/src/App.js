import React from "react";
import "./App.css"
import "../src/styles/side-bar.css"
import Sidebar from "./component/sidebar";
import Dashboard from "./pages/Dashboard";
import KnowProducts from "./pages/Know-products";
import KnowTeam from "./pages/Know-team"
import MakeDecision from "./pages/Make-decision"
import ViewDecision from "./pages/View-decision"
import MakeSuggestion from "./pages/Make-suggestion";
import ViewSuggestion from "./pages/View-suggestion"
import  RequestTimeOff from "./pages/Request-time-off"
import KnowMicheal from "./pages/KnowMicheal";
import Account from "./pages/Account";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
     <Sidebar/>
      <BrowserRouter>
        <Routes>
          <Route index element ={<Sidebar/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/KnowTeam" element={<KnowTeam/>}/>
          <Route path="/KnowProducts" element={<KnowProducts/>}/>
          <Route path="/MakeDecision" element={<MakeDecision/>}/>
          <Route path="/ViewDecision" element={<ViewDecision/>}/>
          <Route path="/MakeSuggestion" element={<MakeSuggestion/>}/>
          <Route path="/ViewSuggestion" element={<ViewSuggestion/>}/>
          <Route path="/RequestTimeOff" element={<RequestTimeOff/>}/>
         
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
