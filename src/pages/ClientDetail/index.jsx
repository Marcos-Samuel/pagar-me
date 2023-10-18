import React, { useEffect, memo, useState } from "react";
import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Axios from "../../services/api";
import { useMainContext } from "../../hooks/useMainContext";
import FullTableCobranca from "../../components/FullTableCobranca";
import RegisterCharges from "../../components/RegisterCharges";
import { useParams, useNavigate } from "react-router-dom";
import ModalEditClients from "../../components/ModalEditClients";
import { formatarCPF, formatarTelefone, formatarCEP } from "../../utils/data";
import MenuTable from "../../components/MenuTable";

function ClientDetail() {
  const title = "Clientes";
  const subtitle = "Detalhes do cliente";
  const { getOne } = useMainContext();
  const { id } = useParams();
 const [showCharges, setShowCharges] = useState([]);
  const {
    handleOpen,
    open,
    handleOpenEdith,
    openEdith,
    setShowClient,
    showClient,
    userLog,
  } = useMainContext();

  const navigate = useNavigate();



  useEffect(() => {
    async function getCharges() {
      try {
        const response = await Axios.get(`/clients/${id}/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });

        setShowCharges(response.data);
      } catch (error) {}
    }

    getCharges();
  }, [open]);


  useEffect(() => {
    async function getOne() {
      try {
        const response = await Axios.get(`/clients/${id}/clients/${id}`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });

        setShowClient(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getOne();
  }, [openEdith]);

  useEffect(() => {
    if (!getOne) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} subtitle={subtitle} />

        <main className="container-clients">
          <MenuTable
            name={
              showClient?.name
            }
          />
          <div>
            <div className="content-start">
              <div className="contents-title-detail">
                <h2 className="medium-text ">Dados do cliente</h2>
                <button
                  onClick={handleOpenEdith}
                  className="btn-cancel btn-large"
                  type="button"
                >
                  Editar Cliente
                </button>
              </div>
              <div>
                <div className="container-text-detail">
                  <div className="container-text-up">
                    <div className="content-text">
                      <h6>E-mail</h6>
                      <p>{showClient?.email}</p>
                    </div>
                    <div className="content-text">
                      <h6>Telefone</h6>
                      <p>{formatarTelefone(showClient?.phone)}</p>
                    </div>
                    <div className="content-text">
                      <h6>CPF</h6>
                      <p>{formatarCPF(showClient?.cpf)}</p>
                    </div>
                  </div>
                </div>
                <div className="container-text-detail">
                  <div className="container-text-back">
                    <div className="content-text">
                      <h6>Endereço</h6>
                      <p>{showClient?.address}</p>
                    </div>
                    <div className="content-text">
                      <h6>Bairro</h6>
                      <p>{showClient?.neighborhood}</p>
                    </div>
                    <div className="content-text">
                      <h6>Complemento</h6>
                      <p>{showClient?.complement}</p>
                    </div>
                    <div className="content-text">
                      <h6>CEP</h6>
                      <p>{formatarCEP(showClient?.cep)}</p>
                    </div>
                    <div className="content-text">
                      <h6>Cidade</h6>
                      <p>{showClient?.city}</p>
                    </div>
                    <div className="content-text">
                      <h6>UF</h6>
                      <p>{showClient?.state}</p>
                    </div>
                  </div>
                </div>
              </div>
              {open && <RegisterCharges client={showClient} id={id} />}
              {openEdith && <ModalEditClients id={id} client={showClient} />}
            </div>
          </div>
          <FullTableCobranca cobrancas={showCharges} handleOpen={handleOpen} />
        </main>
      </div>
    </div>
  );
}

export default memo(ClientDetail);
