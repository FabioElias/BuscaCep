import React from "react";
import './styles/main.css';

function TrackCep({ events }) {
  console.log(events);
  if (!events || events.length === 0) return null;

  return (
    <>
      <h1>CEP Encontrado : </h1>
      <ul>
        {events.map((item) => 
          <li className="list-group-item" key={item.cep}>
            <span>CEP: {item.cep}</span>
            <span>LOGRADOURO: {item.logradouro}</span>
            <span>COMPLEMENTO: {item.complemento}</span>
            <span>BAIRRO: {item.bairro}</span>
            <span>CIDADE: {item.localidade}</span>
            <span>UF: {item.uf}</span>
            <span>DDD: {item.ddd}</span>
          </li>
        )},
      </ul>
    </>
  )
}

export default TrackCep;
