import React from "react";
import { imoveis } from '../../Api/api-info-card';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Order } from "../../components/Order/Order";
import './style.css'

import {
  Link,
} from "react-router-dom";




export const Imovel = () => {

  return (
    <>

      <Order listCount={count} />

      <div className="center">
        <div className="card-imoveis-container">
          {imoveis.map((data, key) => {
            const total = parseInt(data.Cleaningfee) + parseInt(data.Caucao);
            return (


              <div key={key}>
                <Link to={`/Propriedades/Detalhes/${data.id}`}  >
                  <Card>
                    <Card.Img variant="top" src={data.image} />
                    <Card.Body>
                      <Card.Title>{data.Nameimovel}</Card.Title>
                      <Card.Text>
                        {data.Description}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>Máximo de hóspedes: <span>{data.guests}</span></ListGroupItem>
                      <ListGroupItem>Taxa de limpeza: <span>{data.Cleaningfee}</span></ListGroupItem>
                      <ListGroupItem>Caução: <span>{data.Caucao}</span></ListGroupItem>
                      <ListGroupItem>Bairro: <span>{data.Neighborhood}</span></ListGroupItem>
                      <ListGroupItem>   Total:<span>{total}</span></ListGroupItem>
                    </ListGroup>

                  </Card></Link>
              </div>



            );
          })}
        </div>
      </div>

    </>
  );
};
var count = Object.keys(imoveis).length;
