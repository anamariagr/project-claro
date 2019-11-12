import React from 'react';
import ReactSlider from 'react-slider';


class SectionList extends React.Component{
    constructor(props) {
        super(props);
      
        this.state={
        
         networkValue:0,
         stepsInternet:["0MB","50MB","100MB","200MB","500MB","1GB","2GB","3GB","5GB","10GB","15GB","Ilimitado"],
         stepsMinutos:["0","100","200","300","400","500","1000","1500","2000","Ilimitado"],
         stepsSms:["50","100","250","500","750","1,000","1,500","2,000","Ilimitado"]
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
                           <img className="image-link" alt=" " src="./imagen/phone.png"/>
                           <i className="fa fa-plus-list"></i>
                           </div>
                           <div className="col-lg-3 section-phone-position">
                             <p>a</p>
                             <p>b</p>
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
                           <div className="col-lg-6">
                          <form>
                          <div className="col-lg-3 border-rigth">
                             <div className="row">
                                 <div className="col-lg-12">
                                     <p className="font-bold">Filtros</p>
                                 </div> 
                                 <div className="col-lg-12">
                                     <p className="mb-3 font-size-14">Internet: <b>{this.calculateInternet()}</b> </p>
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
                                 <div className="col-lg-12">
                                 <p className="mb-3 font-size-14">Minutos: <b>{this.calculateMinutos()}</b> </p>
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
                                 <div className="col-lg-12">
                                 <p className="mb-3 font-size-14">Mensajes SMS: <b>{this.claculaSms()}</b> </p>
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
                         </div>
                          </form>
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