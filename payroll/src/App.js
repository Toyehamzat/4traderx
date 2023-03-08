import React from "react";
import "./App.css"
import "../src/styles/side-bar.css"
import Sidebar from "./component/sidebar";
import Header from "./component/Header"
import Main from "./component/main"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
          <Sidebar/>
      </Router>
       
       <Header/>
        <Main/>
       
       
    </div>
  );
}

export default App;
