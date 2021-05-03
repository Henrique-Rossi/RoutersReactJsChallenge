
import { useHistory, useParams } from "react-router-dom";
import { imoveis } from '../../../Api/api-info-card';

import './style.css'


export const Detalhes = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/propriedades");
    }


    const params = useParams();
    return (

        <div>

            <div className="Navmenu">
                <a href="/#" onClick={handleClick}>Imóveis <i className="seta-direita"></i> </a>
                <a href="/#">{imoveis[params.id].Nameimovel} </a>
            </div>

            <div className="center">
                <div className="FlexContainer">
                    <div className="FlexContainer-img">
                        <img src={imoveis[params.id].image} alt={imoveis[params.id].image}/>
                        <h5>Localização</h5>
                        <h6>{imoveis[params.id].Fulladdress}</h6>
                    </div>
                    <div className="FlexContainer-info">
                        <h4>{imoveis[params.id].Nameimovel}</h4>
                        <h6>{imoveis[params.id].Description} <span>{imoveis[params.id].Status}</span></h6>

                       

                        
                        <div className="FlexContainer-Cards">
                            <div className="card">
                                <div className="card-body">
                                    <h5>Max. de Hóspedes </h5>
                                    {imoveis[params.id].guests}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5>Taxa de Limpeza </h5>
                                    {imoveis[params.id].Cleaningfee}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5>Caução </h5>
                                    {imoveis[params.id].Caucao}
                                </div>
                            </div>
                        </div>


                        <h1>Comodidades</h1>
                        <ul>
                            {/* <li>{imoveis[params.id].listofItens} </li> */}

                            {imoveis[params.id].listofItens.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    );

}