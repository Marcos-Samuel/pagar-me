import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";

export default function ResumeSmallCharges({ charges, header, page, filter }) {
  const { setFilter } = useMainContext();

  return (
    <>
      <table className="resume-table ">
        <caption className="table-small">
          <span>{header}</span>
          <span
            className={` ${
              header === "Cobranças Vencidas"
                ? "inadimplente"
                : header === "Cobranças Pagas"
                ? "em-dia"
                : "prevista"
            }`}
          >
            {charges.length}
          </span>
        </caption>
        <thead className="relative-text">
          <tr>
            <th>Clientes</th>
            <th>ID da Cob.</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody className="small-text">
          {charges.slice(0, 4).map((charge, index) => (
            <tr key={index}>
              <td>{charge.client_name}</td>
              <td>{charge.id}</td>
              {charge.value && <td>R$ {charge.value}</td>}
            </tr>
          ))}
        </tbody>
        <tfoot className="">
          <tr>
            <td />
            <td className="bottom-table">
              <Link to={page} onClick={() => setFilter(filter)}>
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
