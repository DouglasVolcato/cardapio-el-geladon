import "./Home.css";
import { Header } from "./Header";

import { PaletaLista } from "./PaletaLista";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}
