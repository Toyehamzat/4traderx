import React from "react";
import "./App.css";
import "../src/styles/side-bar.css";
import Sidebar from "./component/sidebar";
import Dashboard from "./component/pages/Dashboard";
import KnowProducts from "./component/pages/Know-products";
import KnowTeam from "./component/pages/Know-team";
import MakeDecision from "./component/pages/Make-decision";
import ViewDecision from "./component/pages/View-decision";
import MakeSuggestion from "./component/pages/Make-suggestion";
import ViewSuggestion from "./component/pages/View-suggestion";
import RequestTimeOff from "./component/pages/Request-time-off";
import Account from "./component/pages/Account";
import Exchange from "./component/pages/Exchange";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
       
        
          <Routes>
            <Route index element={<Account />} />
            <Route path="/account" element={<Account />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/KnowTeam" element={<KnowTeam />} />
            <Route path="/KnowProducts" element={<KnowProducts />} />
            <Route path="/MakeDecision" element={<MakeDecision />} />
            <Route path="/ViewDecision" element={<ViewDecision />} />
            <Route path="/MakeSuggestion" element={<MakeSuggestion />} />
            <Route path="/ViewSuggestion" element={<ViewSuggestion />} />
            <Route path="/RequestTimeOff" element={<RequestTimeOff />} />
          </Routes>
        
      </div>
    </>
  );
}

export default App;
