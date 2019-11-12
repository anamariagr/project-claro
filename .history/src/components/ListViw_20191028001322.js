import React from 'react';
import ReactSlider from 'react-slider';



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
                 <div className="col-lg-12 main-right-list">
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