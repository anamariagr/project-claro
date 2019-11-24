import React from 'react';
import SectionFotter from './Footer';
import SectionMain from './Main';
import SectionNavbar from './Navbar';
import "../css/App.css";
import SectionList from './ListViw';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import SectionListCenter from './ListCenter';



function App() {
    return (
        <Router path="/home" exact component={SectionMain}>
            <Redirect to="/List"/>
            <div className="App section-principal">
                <SectionNavbar/>
                <Route path="/List" component={SectionList}/>
                
             </div>
            <div className="section-secundaria">
                <Switch>
                <div className="col-lg-12">
                   <SectionListCenter/>
                    </div>
                    <div className="main">
                        <Route path="/home" exact component={SectionMain}/>
                    </div>
                  
                </Switch>
             </div>
             <div className="resut">
             <buttom type="buttom" class="btn btn-danger btn-sm btn-result">Màs resultados</buttom>
             </div>
             <div className="footer">
             <SectionFotter/>
             </div>
           
        </Router>

    );

}
export default App;