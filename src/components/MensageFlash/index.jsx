import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import IconCloser from "../../assets/closer.png";
import { useEffect } from "react";

export default function MensagemFlash({ msg }) {
  const { setMessageFlash } = useMainContext();
  const closeMessage = setTimeout(() => setMessageFlash(false), 5000);

  const close = () => {
    setMessageFlash(false);
    clearTimeout(closeMessage);
    return;
  };

  useEffect(() => {
    closeMessage;
  }, []);
  return (
    <>
      <div className="container-mensage-flash">
        <div className="mensage-item">
          <p>{msg}</p>
          <img className="close" src={IconCloser} alt="close" onClick={close} />
        </div>
      </div>
    </>
  );
}
