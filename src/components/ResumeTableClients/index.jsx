import { Link } from "react-router-dom";
import "./style.css";
import inadimplentesIMG from "../../assets/clientes-inadimplentes.svg";
import clientesEmDiaIMG from "../../assets/clientes-em-dia.svg";
import { useMainContext } from "../../hooks/useMainContext";
import { formatarCPF } from "../../utils/data";

export function ResumeTableClients({ clients, header, filter }) {
  const { setFilter } = useMainContext();
  return (
    <>
      <table className="resume-table ">
        <caption className="table-large">
          {header === "Clientes em dia" ? (
            <img src={clientesEmDiaIMG} alt="" />
          ) : (
            <img src={inadimplentesIMG} alt="" />
          )}
          <span>{header}</span>
          <span
            className={`${
              header === "Clientes em dia" ? "em-dia" : "inadimplente "
            } `}
          >
            {clients.length}
          </span>
        </caption>
        <thead className="relative-text">
          <tr>
            <th>Clientes</th>
            <th>ID de Clie.</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody className="small-text">
          {clients.slice(0, 4).map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.id}</td>
              <td>{formatarCPF(client.cpf)}</td>
            </tr>
          ))}
        </tbody>

        <tfoot className="">
          <tr>
            <td />
            <td className="bottom-table">
              <Link to={"/clients"} onClick={() => setFilter(filter)}>
                Ver todos
              </Link>
            </td>

            <td />
          </tr>
        </tfoot>
      </table>
    </>
  );
}
