import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';
import SectionNavbar from './Navbar';
import "../css/App.css";
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';




class App extends React.Component {
   render() {
     return (
       <Router>
           <div className="App section-principal">
          <SectionNavbar/>
          <SectionMain />
          <SectionFotter/>
      </div>
       </Router>
      
      );
    }
}
export default App;