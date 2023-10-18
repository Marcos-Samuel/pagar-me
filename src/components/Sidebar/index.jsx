import { useLocation, useNavigate, useParams } from "react-router-dom";
import Homeicon from "../../assets/home.svg";
import Clientsicon from "../../assets/clients.svg";
import Cobrancaicon from "../../assets/FolhaCobranca.svg";
import CobrancaiconActive from "../../assets/FolhaCobranca-active.svg";
import HomeIconActive from "../../assets/home-active.svg";
import ClientsIconActive from "../../assets/clients-active.svg";
import "./style.css";
import { useEffect, useState } from "react";
import { useMainContext } from "../../hooks/useMainContext";

export default function Sidebar() {
  const [rote, setRote] = useState("");
  const [iconHome, setIconHome] = useState(Homeicon);
  const [iconClients, setIconClients] = useState(Clientsicon);
  const [iconCobranca, setIconCobranca] = useState(Cobrancaicon);
  const { setFilter } = useMainContext();

  const location = useLocation();
  const navigator = useNavigate("/clients");
  const { id } = useParams();

  const verifyActive = () => {
    setRote(location.pathname);
    if (rote === "/home") {
      setIconHome(HomeIconActive);
      setIconClients(Clientsicon);
      setIconCobranca(Cobrancaicon);
      return;
    }
    if (rote === "/clients" || rote === `/client-detail/${id}`) {
      setIconHome(Homeicon);
      setIconCobranca(Cobrancaicon);
      setIconClients(ClientsIconActive);
      return;
    }
    if (rote === "/cobrancas") {
      setIconHome(Homeicon);
      setIconClients(Clientsicon);
      setIconCobranca(CobrancaiconActive);
      return;
    }
  };

  const handleClients = () => {
    navigator("/clients");
    setFilter("");
    return;
  };

  const handleCharge = () => {
    navigator("/cobrancas");
    setFilter("");
    return;
  };

  useEffect(() => {
    verifyActive();
  }, [rote]);

  return (
    <aside>
      <div className="sidebar-container">
        <nav className="sidebar-content">
          <li
            className={`sidebar-item ${rote === "/home" && "active"}`}
            onClick={() => navigator("/home")}
          >
            <img src={iconHome} alt="" />
            <p>Home</p>
          </li>

          <li
            className={`sidebar-item ${
              (rote === "/clients" || rote === `/client-detail/${id}`) &&
              "active"
            }`}
            onClick={handleClients}
          >
            <img src={iconClients} alt="" />
            <p>Clientes</p>
          </li>

          <li
            className={`sidebar-item ${rote === "/cobrancas" && "active"}`}
            onClick={handleCharge}
          >
            <img src={iconCobranca} alt="" />
            <p>Cobranças</p>
          </li>
        </nav>
      </div>
    </aside>
  );
}
