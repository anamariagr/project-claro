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
                                <div class="dropdown mar-y-2 open">
                        <button class="btn btn-default font-3 pad-y-1 dropdown-toggle" type="button" id="phone-actions" data-toggle="dropdown" aria-expanded="true" data-enable-when-ready=""> Cambiar <span class="caret"></span> </button>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="phone-actions">
                                <li data-show-when-phone="" style="display: none;"><a href="javascript:void(0)" data-edit-phone="">Ver otro smartphone</a></li>
                                <li data-show-when-byo-or-no-phone="" style=""><a href="javascript:void(0)" data-edit-phone="">Agregar smartphone</a></li>
                                <li data-show-when-phone="" style="display: none;"><a href="javascript:void(0)" data-remove-phone-button="">Quitar Smartphone</a></li>
                                    <li data-show-when-phone="" style="display: none;" data-closest-match-hidden=""><a href="javascript:void(0)" data-show-closest-match-button="">Ver Similares</a></li>
                                    <li data-show-when-phone="" style="display: none;" data-closest-match-shown=""><a href="javascript:void(0)" data-dont-show-closest-match-button="">No mostrar equipos parecidos</a></li>
                                <li data-show-when-phone="" style="display: none;"><a href="javascript:void(0)" data-phone-specs-button="">Ver Ficha</a></li>
                                <li data-show-when-phone="" style="display: none;"><a href="javascript:void(0)" data-phone-gallery-button="">Galería</a></li>
                                <li role="separator" class="divider"></li>
                                                            <li><a href="javascript:void(0)" data-byo-phone-button="0">Planes sin smartphone</a></li>
                                                            <li data-show-when-byo="" style="display: none;"><a href="javascript:void(0)" data-remove-phone-button="">Disponibles con cada plan</a></li>
                            <li role="separator" class="divider"></li>
                            <li data-add-line-span="" style="display: none;"><a href="javascript:void(0)" data-add-line-button="">Agregar otro plan</a></li>
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

export default SectionList; 