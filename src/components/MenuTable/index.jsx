import "./style.css";
import IconFilter from "../../assets/filter.svg";
import IconSheach from "../../assets/sheach.svg";
import IconClients from "../../assets/clients.svg";
import { useMainContext } from "../../hooks/useMainContext";
import { useLocation } from "react-router-dom";

export default function MenuTable({ name }) {
  const { setModalClients, setFilter } = useMainContext();

  const { pathname } = useLocation();

  return (
    <div className="container-menu-table-clients">
      <div>
        <img src={IconClients} alt="clientes" />
        <h1>{name}</h1>
      </div>
      <div>
        {pathname === "/clients" && (
          <button type="button" onClick={() => setModalClients(true)}>
            {" "}
            + Adicionar Clientes
          </button>
        )}
        {pathname === "/clients" || pathname === "/cobrancas" ? (
          <>
            <img src={IconFilter} alt="filtro" />
            <div className="container-input-shearch">
              <img src={IconSheach} alt="pesquisa" />
              <input
                type="text"
                name="shearch"
                placeholder="Pesquisar"
                onBlur={(e) => setFilter(e.target.value)}
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
