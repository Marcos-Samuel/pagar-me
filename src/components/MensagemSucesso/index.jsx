import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import CheckMensage from "../../assets/check-mensage.svg";
import Close from "../../assets/close.svg";
import { useEffect } from "react";

export default function MensagemSucesso() {
  const { setMessageSucessAddClient } = useMainContext();
  const closeMessage = setTimeout(() => setMessageSucessAddClient(false), 5000);

  const close = () => {
    setMessageSucessAddClient(false);
    clearTimeout(closeMessage);
    return;
  };

  useEffect(() => {
    closeMessage;
  }, []);
  return (
    <>
      <div className="container-mensage">
        <div className="mensage-item">
          <img src={CheckMensage} alt="info" />
          <p>Cadastro concluído com sucesso</p>
          <img className="close" src={Close} alt="close" onClick={close} />
        </div>
      </div>
    </>
  );
}
