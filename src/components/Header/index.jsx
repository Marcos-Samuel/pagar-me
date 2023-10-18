import React, { useState } from "react";
import "./style.css";
import seta from "../../assets/seta.svg";
import cicleInfo from "../../assets/circle-info.svg";
import iconeEdit from "../../assets/icone-edit.svg";
import iconeQuit from "../../assets/icone-quit.svg";
import iconePolygon from "../../assets/icone-polygon.svg";
import { useMainContext } from "../../hooks/useMainContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Modal from "../../components/ModalEditUser";
import ConfirmationModal from "../ConfirmationModal";
import MessageSucessUpdateUser from "../MensageSucessUpdateUser";

export default function Header({ title, subtitle }) {
  const {
    setModalTeste,
    removeUserLog,
    userLog,
    modalTeste,
    messageSucessUpdateUser,
    setUserLog,
  } = useMainContext();
  const [openMineModal, setOpenMiniModal] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  let { pathname } = useLocation();
  const navigator = useNavigate();

  const handleModal = () => {
    setModalTeste(true);
  };

  const handleOpenMiniModal = () => {
    setOpenMiniModal(!openMineModal);
  };

  const handleLogout = () => {
    setIsConfirmationModalOpen(true);
  };

  const confirmLogout = () => {
    removeUserLog();
    setUserLog({});
    navigator("/");
    setIsConfirmationModalOpen(false);
  };

  const cancelLogout = () => {
    setIsConfirmationModalOpen(false);
  };

  function pegarIniciais(nomes) {
    const partesNomes = nomes.split(" ");
    let iniciais = "";

    for (let i = 0; i < Math.min(2, partesNomes.length); i++) {
      iniciais += partesNomes[i].charAt(0);
    }

    return iniciais;
  }

  return (
    <>
      <header>
        <div className="contents-header">
          <div className="header-info">
            {pathname === "/home" ? (
              <h1 className="big-text">{title}</h1>
            ) : (
              <div className="text-client">
                {subtitle ? (
                  <Link to={"/clients"}>{title}</Link>
                ) : (
                  <span>{title}</span>
                )}

                {subtitle && (
                  <span className="sub-title">
                    <span className="separar-title">{">"}</span> {subtitle}
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="user-info">
            <div className="circle-info">
              <span>{pegarIniciais(userLog.name)}</span>
            </div>
            <p className="user-name">{userLog.name}</p>
            <img src={seta} alt="Seta" onClick={handleOpenMiniModal} />
            {openMineModal && (
              <div className="button-edit">
                <img className="polygon-item" src={iconePolygon} alt="" />
                <div className="button-item">
                  <img src={iconeEdit} alt="" onClick={handleModal} />
                  <p>Editar</p>
                </div>
                <div className="button-item">
                  <img src={iconeQuit} alt="" onClick={handleLogout} />
                  <p>Sair</p>
                </div>
                <ConfirmationModal
                  isOpen={isConfirmationModalOpen}
                  onCancel={cancelLogout}
                  onConfirm={confirmLogout}
                />
              </div>
            )}
          </div>
        </div>
      </header>
      {modalTeste && <Modal />}

      {messageSucessUpdateUser && <MessageSucessUpdateUser />}
    </>
  );
}
