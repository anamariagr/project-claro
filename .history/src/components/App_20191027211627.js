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




class App extends React.Component {
   render() {
     return (
       <Router>
           <div className="App section-principal">
           <SectionNavbar/>
          
             <Router path="/home" component={SectionMain}/>
             <Router path="/List" component={SectionList}/>
           
         
          <SectionFotter/>
      </div>
       </Router>
      
      );
    }
}
export default App;