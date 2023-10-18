import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import Sucess from "../../assets/sucess.svg";
import { useEffect } from "react";

export default function MensagemFlash() {
  const { setMessageSucessUpdateUser } = useMainContext();
  const closeMessage = setTimeout(
    () => setMessageSucessUpdateUser(false),
    5000
  );

  const close = () => {
    setMessageSucessUpdateUser(false);
    clearTimeout(closeMessage);
    return;
  };

  useEffect(() => {
    closeMessage;
  }, []);
  return (
    <>
      <div className="container-mensage-sucess-up-user" onClick={close}>
        <div className="mensage-item-sucess">
          <img className="sucess" src={Sucess} alt="close" />
          <p>Cadastro alterado com sucesso!</p>
        </div>
      </div>
    </>
  );
}
