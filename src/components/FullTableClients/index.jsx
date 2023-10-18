import "./style.css";
import Charge from "../../assets/cobranca.svg";
import iconOrdem from "../../assets/cobranca-icon.svg";
import { NavLink } from "react-router-dom";
import { useState, memo } from "react";
import RegisterCharges from "../RegisterCharges";
import { useMainContext } from "../../hooks/useMainContext";
import { formatarCPF, formatarTelefone } from "../../utils/data";

function FullTable({ lista }) {
  const [cobrancaReg, setCobrancaReg] = useState([]);
  const { open, handleOpen, filter, setGetOne } = useMainContext();

  const handleModal = (item) => {
    handleOpen();
    setCobrancaReg(item);
  };

  const lowerFilter = filter.toLocaleLowerCase().trim();

  const clientFilter = lista.filter((client) => {
    const value = Object.values(client);
    return String(value).toLocaleLowerCase().includes(lowerFilter);
  });

  return (
    <div className="container-full-table">
      <table className="full-table">
        <thead className="relative-text">
          <tr>
            <th>
              <img src={iconOrdem} alt="" />
              Cliente
            </th>
            <th>CPF</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Status</th>
            <th>Criar Cobranças</th>
          </tr>
        </thead>
        <tbody className="small-text ">
          {clientFilter.map((item) => (
            <tr className="font-roboto font-tr line" key={item.id}>
              <td
                onClick={() => {
                  setGetOne(item);
                }}
              >
                <NavLink to={`/client-detail/${item.id}`} id="Link">
                  {item.name}
                </NavLink>
              </td>
              <td>{formatarCPF(item.cpf)}</td>
              <td>{item.email}</td>
              <td>{formatarTelefone(item.phone)}</td>
              <td>
                <span
                  className={`status-cell ${
                    item.status === "Inadimplente" ? "vencida" : "paga"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td>
                <p className="link-table">
                  <img onClick={() => handleModal(item)} src={Charge} alt="" />
                  <span>Criar cobrança</span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {open && <RegisterCharges id={cobrancaReg.id} client={cobrancaReg} />}
    </div>
  );
}
export default memo(FullTable);
