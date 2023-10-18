import "./style.css";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeExcluir from "../../assets/excluir.svg";
import iconeCobranca from "../../assets/cobranca-icon.svg";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import Loading from "../../components/LoadingPage";
import DetailsCharges from "../DetailsCharges";
import MenssagemConfirm from "../../components/MensageExcluirCobranca";
import { useMainContext } from "../../hooks/useMainContext";
import ModalEditCharges from "../ModalEditCharges";

export default function FullTableCobranca({
  cobrancas,
  handleOpen,
  setCobrancas,
}) {
  const { pathname } = useLocation();
  const [detailsItem, setDetailsItem] = useState({});

  const [currentCobrancas, setcurrentCobrancas] = useState(null);
  const [editingCharge, setEditingCharge] = useState(null);
  const {
    cobrancaExcluir,
    setCobrancaExcluir,
    filter,

    handleOpenDetails,
    openDetails,
    modalType,
    setModalType,
    setOpenDetails,
  } = useMainContext();

  const handleExibirModal = (currentCharge, type) => {
    setcurrentCobrancas(currentCharge);
    setCobrancaExcluir(true);
    setModalType(type);
  };

  const OpenDetailsCharge = (e, item) => {
    const valid = e.target.classList;

    if (
      valid[0] === "icon-item" ||
      valid[0] === "delete" ||
      valid[0] === "delete-icon" ||
      valid[0] === "delete-text" ||
      valid[0] === "edit" ||
      valid[0] === "edit-icon" ||
      valid[0] === "edit-text"
    ) {
      return;
    }
    setDetailsItem(item);
    handleOpenDetails();
    return;
  };

  const handleEditClick = (charge) => {
    setEditingCharge(charge);
    setModalType("editar");
  };

  const lowerFilter = filter.toLocaleLowerCase().trim();

  const chargesFilter = cobrancas.filter((charge) => {
    const { client_name, due_date, id, status, value } = charge;
    const valueCharge = Object.values({
      client_name,
      due_date,
      id,
      status,
      value,
    });
    return String(valueCharge).toLocaleLowerCase().includes(lowerFilter);
  });

  useEffect(() => {
    if (!cobrancaExcluir) {
      setModalType(null);
    }
  }, [cobrancaExcluir]);

  return (
    <div
      className={` ${
        pathname === "/cobrancas"
          ? "container-full-table"
          : "container-resume-table"
      }`}
    >
      <table className="full-table">
        {pathname !== "/cobrancas" && (
          <caption>
            <div>
              <div>
                <h2> Cobraças do cliente</h2>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleOpen}
                  className="btn-large"
                >
                  + Nova cobrança
                </button>
              </div>
            </div>
          </caption>
        )}
        <thead className="relative-text">
          <tr>
            {pathname === "/cobrancas" && (
              <th>
                <img src={iconeCobranca} alt="" />
                Cliente
              </th>
            )}
            <th>
              <img src={iconeCobranca} alt="" />
              ID Cob.
            </th>
            <th>Valor</th>
            <th>Data de venc.</th>
            <th>Status</th>
            <th>Descrição</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="small-text">
          {chargesFilter.map((item) => (
            <tr
              className="select-tr"
              key={item.id}
              onClick={(e) => OpenDetailsCharge(e, item)}
            >
              {pathname === "/cobrancas" && <td>{item.client_name}</td>}

              <td>{item.id}</td>
              <td>R$ {item.value}</td>
              <td>{format(new Date(item.due_date), "dd/MM/yyyy")}</td>

              <td>
                <span
                  className={`status-cell ${
                    item.status === "Pendente"
                      ? "pendente"
                      : item.status === "Paga"
                      ? "paga"
                      : item.status === "Vencida"
                      ? "vencida"
                      : "status-outro"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td title={item.description}>{item.description}</td>

              <td className="icon-item">
                <p className="edit" onClick={() => handleEditClick(item)}>
                  <img className="edit-icon" src={iconeEdit} alt="Editar" />
                  <span className="edit-text">Editar </span>
                </p>
                <p
                  className="delete"
                  onClick={() => handleExibirModal(item, "excluir")}
                >
                  <img
                    className="delete-icon"
                    src={iconeExcluir}
                    alt="Excluir"
                  />
                  <span className="delete-text">Excluir </span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openDetails && !modalType && (
        <DetailsCharges charge={detailsItem} setOpenDetails={setOpenDetails} />
      )}

      {cobrancaExcluir && modalType === "excluir" && (
        <MenssagemConfirm
          currentCobrancas={currentCobrancas}
          setCobrancas={setCobrancas}
          cobrancas={cobrancas}
        />
      )}

      {modalType === "editar" && (
        <ModalEditCharges
          id={editingCharge.id}
          client={editingCharge}
          setModalType={setModalType}
          handleEditCharge={() => handleEditCharge(editingCharge)}
        />
      )}
    </div>
  );
}
