import React from 'react';
import ReactSlider from 'react-slider';
import SectionResulyItem from './ResultItem'



class SectionList extends React.Component{
    
    internetRef = React.createRef();
    minutosRef = React.createRef();
    smsRef = React.createRef();
    redesRef = React.createRef();
    estadoRef= React.createRef();
    compañiaRef = React.createRef();
  
    filterPhone = (e) =>{
      e.preventDefault();
  
     console.log()
      const infoFilter ={
        internetRef: this.state.stepsInternet[this.state.internetValue],
        minutosRef: this.state.stepsMinutos[this.state.minutesValue],
        smsRef: this.state.stepsSms[this.state.smsValue],
        redes:this.redesRef.current.value,
        estado:this.estadoRef.current.value,
        compañia:this.compañiaRef.current.value
  
        
      }
      console.log(infoFilter)
    }
  
    constructor(props) {
       super(props);
     
       this.state={
       
        networkValue:0,
        stepsInternet:["0MB","50MB","100MB","200MB","500MB","1GB","2GB","3GB","5GB","10GB","15GB","Ilimitado"],
        stepsMinutos:["0","100","200","300","400","500","1000","1500","2000","Ilimitado"],
        stepsSms:[" 0"," 50","100","250","500","750","1,000","1,500","2,000","Ilimitado"]
      }
    }
  
    calculateInternet(){
       return this.state.stepsInternet[this.state.internetValue];
    }
    calculateStepInternet(){
      let stepInternet=1;
      return stepInternet;
    }
  
    calculateMinutos(){
      return this.state.stepsMinutos[this.state.minutesValue];
    }
    calculateStepMinutos(){
      let stepMinutos=1;
      return stepMinutos;
    }
  
    claculaSms(){
      return this.state.stepsSms[this.state.smsValue];
    } 
    calculateSeptSms(){
      let stepSms=1;
      return stepSms;
    }
     render(){

        return(

    
            <div className="home container-fluid">
              
      <div className="row">
          <div className="col-lg-12 ColorHeader">
          <nav class="navbar navbar-light  navbar-list">
           
           <div className="row">
             <div className="col-lf-3">
             <p>Estado</p>
             </div>
                <div className="col-lg-3">
                <form class="form-inline ">
            <div class="dropdown ">
              <button class="btn  dropdown-toggle drow-list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ninguno Seleccionado  
              </button>
              <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            </form>
                </div>
                <div className="col-lg-7">
                  <p className="information">(Muestra ubicación - Precio específico)</p>
                </div>
           </div>
          </nav>
           </div>
          <div className="col-lg-12 main"> 
               <div className="row">
                 <div className="col-lg-6 maind-list">
                 <div className="row">
                     <div className="col-lg-12 pt-lg-3 pl-lg-1"> 
                     <ul className="nav-list pl-lg-3">
                         <li>inicio / </li>
                         <li className="pl-2" href="/home">Planes de Celular</li>
                     </ul>
                    
                         </div>
                     </div>
                     <div className="col-lg-12 text-left pl-lg-1 font-plan-list">Planes de Celular en</div>
                     <div className="col-lg-12 text-left pl-lg-1 font-bold-list">
                           Lorem
                           </div>
                     </div>
                 </div>
                 <div className="col-lg-12 main-right-list">
                 <div className="row">
                           <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <img className="image-link" alt=" " src="./imagen/phone.png"/>
                                        <i className="fa fa-plus-list"></i>
                                     </div>
                                <div className="col-lg-9 section-phone-position">
                                <p className="color-list">Datos</p>
                                    <p className="font-bold-subt">Disponibles con cada plan</p>
                                    <div class="btn-group">
                                        <button class="btn btn-section-phone btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Cambiar
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                        </div>
                                        
                                </div>
                                </div>
                           </div>
                          
                          
                                    <div className="col-lg-6">
                                    <form className="filter-list" onSubmit={this.filterPhone}>
                                        <div className="row">
                                        <div className="col-lg-4">
                                          <div className="row">
                                          <div className="col-lg-12">
                                          <p className="subtitle">Datos</p>
                                   <p className="mb-3 font-size-14-list value-silider"><b>{this.calculateInternet()}</b> </p>
                                  <div className="mb-4"> 
                                  <ReactSlider 
                                        className="horizontal-slider"
                                       
                                        step={1}
                                        thumbClassName="example-thumb"
                                        trackClassName="example-track"
                                        max={11}
                                        min={0}
                                        onChange={(value)=>{

                                          this.setState({internetValue:value})
                                        }}
                                        renderThumb={(props, state) => <div {...props}></div>}
                                    />
                                    </div>
                              </div> 
                                            
                                          </div>
                                   
                                  
                                 </div>
                                    <div className="col-lg-4">
                                        <div className="row">
                                        <div className="col-lg-12">
                                        <p className="subtitle">Datos</p>
                              <p className="mb-3 font-size-14-list value-silider"><b >{this.calculateMinutos()}</b> </p>
                              <div className="mb-4"> 
                              <ReactSlider
                                        className="horizontal-slider"
                                        ref={this.minutosRef}
                                        max={9}
                                        min={0}
                                        step={1}
                                        thumbClassName="example-thumb"
                                        trackClassName="example-track"
                                        onChange={(value)=>{
                                         
                                          this.setState({minutesValue:value})
                                        }}
                                        renderThumb={(props, state) => <div {...props}></div>}
                                    />
                                    </div>
                              </div> 
                                        </div>
                                     
                                      
                                        </div> 
                                        <div className="col-lg-4">
                                        <p className="subtitle">Datos</p>
                                       
                                        <div className="row">
                                      
                                        <div className="col-lg-12">
                                            <p className="mb-3 font-size-14-list value-silider"> <b className="title-slide-list">{this.claculaSms()}</b> </p>
                                            <div className="mb-4" ref={this.smsRef}> 
                                            <ReactSlider
                                                      className="horizontal-slider"
                                                      
                                                      max={8}
                                                      min={0}
                                                      step={1}
                                                      thumbClassName="example-thumb"
                                                      trackClassName="example-track"
                                                      onChange={(value)=>{

                                                        this.setState({smsValue:value })
                                                      }}
                                                      renderThumb={(props, state) => <div {...props}></div>}
                                                  />
                                                  </div>
                                                  
                                            </div> 
                                            
                                        </div>
                                       

                                        <div className="btn-fliter">
                                         
                                        <i class="fa fa-sliders"></i>
                                                        </div>
                                      
                                        </div> 
                                        </div> 
                                
                                </form> 
                           </div>
                     </div>
                   </div>
                 <div className="col-lg-12 nav-planes-list ">
                   <div className="row border-panel-nav">
                     <div className="col-lg-12">
                       <div className="row">
                         <div className="col-lg-12">
                         <div className="col-lg-9">
                  <ul class="nav item-list">
                      <li class="nav-item pr-lg-3 pl-lg-3">
                      <div className="section-btn-item-list">
                     <button type="button" class="btn btn-list-plan-item ">Primary</button>
                     </div>
                      </li>
                      <li class="nav-item">
                      <div className="section-btn-item-list">
                     <button type="button" class="btn btn-list-plan-item ">Primary</button>
                     </div>
                      </li>
                      <li class="nav-item">
                      <div className="section-btn-item-list">
                     <button type="button" class="btn btn-list-plan-item ">Primary</button>
                     </div>
                     </li>
                      <li class="nav-item pl-lg-3">
                      <div className="section-btn-item-list">
                     <button type="button" class="btn btn-list-plan-item ">Primary</button>
                     </div>
                     </li>
                    </ul>  
                  </div>
                    <div className="col-lg-3">
                      <ul className="item-list nav-btn-End">
                        <li>
                        <div class="btn-group">
                        <div class="dropdown show ">
                              <a class="btn dropdawn-end dropdown-toggle pl-lg-2 pr-lg-2" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filtrar por
                              </a>

                              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                            </div>
                            </div>
                        </li>
                        <li>
                        <div class="btn-group">
                        <div class="dropdown show">
                              <a class="btn dropdawn-end dropdown-toggle ml-lg-2" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="fa fa-share-alt"></i>
                              </a>

                              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                            </div>
                            </div>
                        </li>
                      </ul>
                    </div> 
                         </div>
                       </div>
                   </div>
             <div className="col-lg-12">
                 <SectionResulyItem/>
                     </div>                        
                   </div>
                   
                   </div> 
                   
                                                     
              </div>
          </div>
         
         
      </div>

   
 )
     }

  

} 

export default SectionList; 