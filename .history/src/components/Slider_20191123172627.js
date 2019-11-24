import React from 'react';
import ReactSlider from 'react-slider';
import {Link} from "react-router-dom";

class SectionSlider extends React.Component {
    internetRef = React.createRef();
    minutosRef = React.createRef();
    smsRef = React.createRef();
    redesRef = React.createRef();
    estadoRef = React.createRef();
    compañiaRef = React.createRef();

    filterPhone = (e) => {
        e.preventDefault();

        console.log()
        const infoFilter = {
            internetRef: this.state.stepsInternet[this.state.internetValue],
            minutosRef: this.state.stepsMinutos[this.state.minutesValue],
            smsRef: this.state.stepsSms[this.state.smsValue],
            redes: this.redesRef.current.value,
            estado: this.estadoRef.current.value,
            compañia: this.compañiaRef.current.value

        }
        console.log(infoFilter)
    }

    constructor(props) {
        super(props);

        this.state = {

            networkValue: 0,
            stepsInternet: [
                "0MB",
                "50MB",
                "100MB",
                "200MB",
                "500MB",
                "1GB",
                "2GB",
                "3GB",
                "5GB",
                "10GB",
                "15GB",
                "Ilimitado"
            ],
            stepsMinutos: [
                "0",
                "100",
                "200",
                "300",
                "400",
                "500",
                "1000",
                "1500",
                "2000",
                "Ilimitado"
            ],
            stepsSms: [
                "50",
                "100",
                "250",
                "500",
                "750",
                "1,000",
                "1,500",
                "2,000",
                "Ilimitado"
            ]
        }
    }

    calculateInternet() {
        return this.state.stepsInternet[this.state.internetValue];
    }
    calculateStepInternet() {
        let stepInternet = 1;
        return stepInternet;
    }

    calculateMinutos() {
        return this.state.stepsMinutos[this.state.minutesValue];
    }
    calculateStepMinutos() {
        let stepMinutos = 1;
        return stepMinutos;
    }

    claculaSms() {
        return this.state.stepsSms[this.state.smsValue];
    }
    calculateSeptSms() {
        let stepSms = 1;
        return stepSms;
    }

    render() {

        return (
            <form className="filter" onSubmit={this.filterPhone}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="row pt-3  border-main">
                                <div className="col-lg-3 border-rigth">
                                    <div className="row">
                                        <div className="col-lg-12 font-bold pb-4">
                                            Lorem?
                                        </div>
                                        <div className="col-lg-6">
                                            <img alt=" " src="./imagen/phone.png"/>
                                            <i className="fa fa-plus"></i>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-9">
                                     <div className="row display-on-in-desktop">
                <div className="col-lg-4 text-left">
                    <div className="row">
                        <div className="col-lg-5 text-center mt-3">
                            <p className="p-font">
                                Compañia</p>
                            <div className="img-logo">
                                <img alt=" " className="imga-mobile" src={this.props.item.image}/>
                            </div>

                        </div>
                        <div className="col-lg-7 mt-2 pl-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="p-phone-selector">{this.props.item.name}
                                    </p>
                                </div>

                                <div className="col-lg-12">
                                <p className="mb-0 p-font"> <i className="fa fa-check mr-2"></i>Whatsapp<span> Ilimitados</span> </p>
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i>Llamadas Claro<span> Ilimitados</span> </p>
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i>SMS SMS  <span>(50 grátis)</span></p>
                                    <p className="mb-0 p-font"><i className="fa fa-check mr-2"></i><span>$50</span> Saldo de regalo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <div className="row">
                        <div className="col-lg-3 donut-left">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.props.item.messages} maxvalue={2000}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut ml-lg-3">
                                    <span className="font-weight">{this.props.item.messages}</span>
                                    <p className="mb-0">Minutos</p>
                                   <p>llamadas</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 donut-right">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Donut data={this.props.item.internet} maxvalue={15360}/>
                                </div>
                                <div className="col-lg-12 sutitles-donut">

                                    <span className="font-weight">{this.calculateInternetValue(15360, this.props.item.internet)}</span>

                                    <p>Datos</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 donut-right year-position">
                            <div className="row">
                                <div className="col-lg-12 item-year">
                                    
                                    <p id="year">AÑOS</p><span></span>
                                </div>
                                <div className="col-lg-12 item-contrat">
                                    <p className="mb-0"> Contrato</p>
                                    <p>Minutos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 position-price-btn">
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <p className=" mb-0"><b className="item-mes mr-2">$</b><span className="font-size-45">0</span><b className="item-mes">/mes</b></p>
                        </div>
                        <div className="col-lg-6 border-btn">
                            <button type="btn" className="btn btn-primary-donut">Mas detalle</button>
                        </div>
                    </div>
                </div>

            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row ">
                                <div className="col-lg-12 pt-5">
                                    <div className="border-main border-bottom">
                                        <Link to='/list'>
                                            <button type="submit" href="/list" className="btn btn-primari">Buscar</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SectionSlider;