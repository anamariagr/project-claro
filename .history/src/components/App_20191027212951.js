import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';
import SectionNavbar from './Navbar';
import "../css/App.css";
import SectionList from './ListViw';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function App() {


     return (
       <Router>
           <div className="App section-principal">
           <SectionNavbar/>
           <Switch>
           <Router path="" exact  component={SectionMain}/>
             <Router path="/ListViw" component={SectionList}/>
           </Switch>
           <SectionFotter/>
      </div>
       </Router>
      
      );
    }

export default App;