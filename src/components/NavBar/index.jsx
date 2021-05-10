import { Link } from "react-router-dom"
import './style.css'
export const Navbar = () => {
    return (
        <div className="menu">
        <nav  >

            <div>
                <h1><a href="/#">Logo</a></h1>
            </div>
            <div>
                <ul >
                    <li><Link to="/Calendario">Calendário</Link></li>
                    <li><Link to="/Clientes">Clientes</Link></li>
                    <li><Link to="/Orcamento">Orçamentos</Link></li>
                    <li><Link to="/Propriedades">Propriedades</Link></li>
                    <li><Link to="/Controle">Controle</Link></li>
                    
                </ul>
            </div>
        </nav>
        </div>
    )
}