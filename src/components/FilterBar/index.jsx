import { DropdownButton, Dropdown, Button } from 'react-bootstrap'
import './style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


export const FilterBar = () => {
    const [startDate, setStartDate] = useState(new Date());
  
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
                    
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

                </div>
                <div className="Check-out">
                    <h5>Check-out</h5>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

                </div>

                <div className="hospedes">
                    <h5>Hóspedes</h5>
                    <DropdownButton id="dropdown-item-button" title="1 Hóspedes">
                       
                        <Dropdown.Item as="button">1 Hóspedes</Dropdown.Item>
                        <Dropdown.Item as="button">2 Hóspedes</Dropdown.Item>
                        <Dropdown.Item as="button">3  Hóspedes</Dropdown.Item>
                    </DropdownButton>

                </div>

                <div className="busca">
                <Button >Busca</Button>
                </div>
                <div className="filtersplus">
                    <a href="/#"><h6>+ mais filtros</h6></a>
                </div>
            </div>

        </div>
    )

}