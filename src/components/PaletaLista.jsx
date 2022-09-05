import React, { useState } from "react";
import "./PaletaLista.css";
import { paletas } from "../mocks/paletas";

export function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});

  const adicionarItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
          <span className="PaletaListaItem__badge">
            {paletaSelecionada[index] || 0}
          </span>
          <div>
            <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
            <div className="PaletaListaItem__preco">
              {" "}
              R$ {paleta.preco.toFixed(2)}{" "}
            </div>
            <div className="PaletaListaItem__descricao">
              {" "}
              Deliciosa paleta de {paleta.titulo}{" "}
            </div>
            <div className="PaletaListaItem__acoes Acoes">
              <button
                onClick={() => adicionarItem(index)}
                className="Acoes__adicionar Acoes__adicionar--preencher"
              >
                adicionar
              </button>
            </div>
          </div>
          <img
            className="PaletaListaItem__foto"
            src={paleta.foto}
            alt={`Paleta de ${paleta.sabor}`}
          />
        </div>
      ))}
    </div>
  );
}
