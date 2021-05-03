import { DropdownButton, Dropdown, Button } from 'react-bootstrap'
import './style.css'

export const FilterBar = () => {
      
    return (
        <div className="center-filter">
            <div className="filterbar">
                <div className="localizacao">
                    <h5>Localização</h5>
                    <DropdownButton id="dropdown-item-button" title="Boa Esperança">
                        <Dropdown.ItemText>Lista de Cidades </Dropdown.ItemText>
                        <Dropdown.Item as="button">Belo Horizonte</Dropdown.Item>
                        <Dropdown.Item as="button">Varginha</Dropdown.Item>
                        <Dropdown.Item as="button">Três Corações</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div className="preco">
                    <h5>Preço</h5>
                    <DropdownButton id="dropdown-item-button" title="300-10000">
                        
                        <Dropdown.Item as="button">1</Dropdown.Item>
                        <Dropdown.Item as="button">1</Dropdown.Item>
                        <Dropdown.Item as="button">1</Dropdown.Item>
                    </DropdownButton>

                </div>
                <div className="Check-in">
                    <h5>Check-in</h5>
                    
                    <input type="numeric"></input>

                </div>
                <div className="Check-out">
                    <h5>Check-out</h5>
                    <DropdownButton id="dropdown-item-button" title="Boa Esperança">
                        
                        <Dropdown.Item as="button">Belo Horizonte</Dropdown.Item>
                        <Dropdown.Item as="button">Varginha</Dropdown.Item>
                        <Dropdown.Item as="button">Três Corações</Dropdown.Item>
                    </DropdownButton>

                </div>

                <div className="hospedes">
                    <h5>hospedes</h5>
                    <DropdownButton id="dropdown-item-button" title="Boa Esperança">
                       
                        <Dropdown.Item as="button">Belo Horizonte</Dropdown.Item>
                        <Dropdown.Item as="button">Varginha</Dropdown.Item>
                        <Dropdown.Item as="button">Três Corações</Dropdown.Item>
                    </DropdownButton>

                </div>

                <div className="busca">
                <Button variant="danger">Busca</Button>
                </div>
                <div className="filtersplus">
                    <a href="/#"><h6>+ mais filtros</h6></a>
                </div>
            </div>

        </div>
    )

}