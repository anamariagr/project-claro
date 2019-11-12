import React from 'react';

import SectionFotter from './Footer';
import SectionMain from './Main';
import SectionNavbar from './Navbar';

import "../css/App.css";




class App extends React.Component {

 
  
  render() {

    
     return (
      
      <div className="App section-principal">
        <SectionNavbar/>
         <SectionMain />
        
       <SectionFotter/>
    </div>
     );
  }
}
export default App;