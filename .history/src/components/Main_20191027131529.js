import React from 'react';

const SectionMain = props =>{

    return(
       
                 <div className="home container-fluid">
              <div className="row">
                  <div className="col-lg-12 hero">
                    <div className="row">
                        <div className="col-md-8">
                        <p className="font-25">aoreet pulvinar justo suscipit pretium </p>
                     <p className="font-30">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                  
                        </div>
                    </div>
                   </div>
                  <div className="col-lg-12 main"> 
                       <div className="row">
                         <div className="col-lg-9 maind">
                         <form className="filter" onSubmit={this.filterPhone}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row p-3 pl-4 pb-5">
                                      <div className="col-lg-1 item">
                                          
                                      </div>
                                      <div className="col-lg-1 item">
                                      
                                      </div>
                                      <div className="col-lg-1 item">
                                    
                                      </div>
                                      <div className="col-lg-1 item">
                                          
                                      </div>
                                      <div className="col-lg-1 item">
                                      
                                      </div>
                                      <div className="col-lg-1 item">
                                      
                                      </div>
                                      <div className="col-lg-1 item">
                                          
                                      </div>
                                      <div className="col-lg-1 item">
                                      
                                      </div>
                                      <div className="col-lg-1 item">
                                      
                                      </div>
                                </div>
                                </div>
                                <div className="col-lg-12 ">
                                <div className="row pt-3  border-main">
                                    <div className="col-lg-5 border-rigth">
                                        <div className="row">
                                              <div className="col-lg-12 font-bold pb-4">
                                              Lorem?
                                              </div>
                                              <div className="col-lg-6">
                                              <img  src="./imagen/phone.png"/>
                                              <i className="fa fa-plus"></i>
                                              </div>
                                              <div className="col-lg-6 pt-5">
                                              <div className="row">
                                                      
                                                      <div className="col-lg-12 font-blue">
                                                         <a href="#">Equipos y Planes</a> 
                                                      </div>
                                                      <div className="col-lg-12">
                                                      ó
                                                      </div>
                                                      <div className="col-lg-12 font-blue">
                                                      <a href="#">Opciones sin Equipo</a> 
                                                      </div>
                                                </div>
                                              </div>
                                        </div>
                                    </div>
                                   
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
                                    <div className="col-lg-3">
                                    <div className="row ">
                                         <div className="col-lg-12 pr-0">
                                               
                                                      <label className="font-bold" >Redes  </label>
                                                      <select ref={this.redesRef} className="form-control inputColor font-size-14" id="exampleFormControlSelect1">
                                                        <option >Mostrar Todas</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                      </select>
                                               
                                              </div> 
                                              <div className="col-lg-12  pr-0 ">
                                              
                                                      <label className="font-bold" >Estado</label>
                                                      <select ref={this.estadoRef} className="form-control inputColor font-size-14" id="exampleFormControlSelect1">
                                                        <option >Ninguna seleccionada</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                      </select>
                                                    </div>
                                          
                                              <div className="col-lg-12  pr-0">
                                              
                                                      <label className="font-bold" >Compañia actual</label>
                                                      <select ref={this.compañiaRef} className="form-control inputColor font-size-14" id="exampleFormControlSelect1">
                                                        <option >Otra ninguna</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                      </select>
                                                    </div>
                                             
                                             
                                              
                                          </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="row ">
                                  <div className="col-lg-12 pt-5">
                                    <div className="border-main border-bottom">
                                    <button type="submit" className="btn btn-primari">Buscar</button>
                                    </div>
                                  </div>
                                  </div>
                                </div>
                            </div>
                            </form> 
                         </div>
                         <div className="col-lg-3 main-right">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label>Mas Buscado - Planes de celular</label>
                                    <ul className="list-right">
                                      <li><a href="#">1.Renovación de Planes</a></li>
                                      <li><a href="#">2.Asegurar un smartphone</a></li>
                                      <li><a href="#">3.Contratar un plan de celular</a></li>
                                      <li><a href="#">4.Medios de Atención a Clientes</a></li>
                                      <li><a href="#">5.Cobertura celular en México</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-12">
                                <label>Preguntas sobre Planes de Celular</label>
                                <ul className="list-right">
                                      <li><a href="#">1.Renovación de Planes</a></li>
                                      <li><a href="#">2.Asegurar un smartphone</a></li>
                                      <li><a href="#">3.Contratar un plan de celular</a></li>
                                      <li><a href="#">4.Medios de Atención a Clientes</a></li>
                                      <li><a href="#">5.Cobertura celular en México</a></li>
                                    </ul>
                                </div>
                                

                            </div>

                        </div>
                         
                       
                       </div>
                      
                  </div>
                 
              </div>
        </div>
      
    )
}

export default SectionMain ;


