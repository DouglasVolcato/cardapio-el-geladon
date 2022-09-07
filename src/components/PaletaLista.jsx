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

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
          {paletaSelecionada[index] > 0 ? (
            <span className="PaletaListaItem__badge">
              {paletaSelecionada[index]}
            </span>
          ) : (
            <span></span>
          )}

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
                className={
                  paletaSelecionada[index] > 0
                    ? "Acoes__adicionar Acoes__adicionar--metade"
                    : "Acoes__adicionar Acoes__adicionar--preencher"
                }
              >
                Adicionar
              </button>
              <button
                onClick={() => removerItem(index)}
                className={
                  paletaSelecionada[index] > 0
                    ? "Acoes__remover remover--metade"
                    : "Acoes__remover Acoes__remover--sumir"
                }
              >
                Remover
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
