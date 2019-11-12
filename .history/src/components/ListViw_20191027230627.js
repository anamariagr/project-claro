import React from 'react';


const SectionList = props =>{

    return(

    
               <div className="home container-fluid">
         <div className="row">
             <div className="col-lg-12 ColorHeader">
               
              </div>
             <div className="col-lg-12 main"> 
                  <div className="row">
                    <div className="col-lg-6 maind-list">
                    <div className="row">
                        <div className="col-lg-12"> 
                        <ul className="nav-list">
                            <li>inicio / </li>
                            <li className="pl-2" href="/home">Planes de Celular</li>
                        </ul>
                       
                            </div>
                        </div>
                        <div className="col-lg-12">a </div>
                        <div className="col-lg-12 text-left font-bold pb-4">
                              Lorem?
                              </div>
                        </div>
                    </div>
                    <div className="col-lg-4 main-right-list">
                    <div className="row">
                              
                              <div className="col-lg-6">
                              <img alt=" " src="./imagen/phone.png"/>
                              <i className="fa fa-plus"></i>
                              </div>
                              <div className="col-lg-6 pt-5">
                                <p></p>
                                <p></p>
                                <div class="btn-group">
                                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Small button
                                    </button>
                                    <div class="dropdown-menu">
                                        ...
                                    </div>
                                    </div>
                                    
                              </div>
                        </div>
                      </div>
                 </div>
             </div>
            
            
         </div>
   
      
    )

} 

export default SectionList; 