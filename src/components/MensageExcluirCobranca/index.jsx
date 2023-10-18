import "./style.css";
import { useMainContext } from "../../hooks/useMainContext";
import Attention from "../../assets/attention-icon.svg";
import Close from "../../assets/close.svg";
import api from "../../services/api";

export default function MensagemExcluirCobranca({
  currentCobrancas,
  setCobrancas,
  cobrancas,
}) {
  const { setCobrancaExcluir, userLog } = useMainContext();

  const handleDeleteCobranca = async () => {
    try {
      await api.delete(`/charges/${currentCobrancas.id}`, {
        headers: { Authorization: `Bearer ${userLog.token}` },
      });

      setCobrancas(cobrancas.filter((item) => item.id !== currentCobrancas.id));
      handleClose();
    } catch (error) {
      console.error("Erro ao excluir a cobrança", error);
    }
  };

  const handleClose = () => {
    setCobrancaExcluir((prevOpen) => !prevOpen);

    return;
  };

  return (
    <>
      <div className="container-attention">
        <div className="mensage-item-close">
          <img className="img-close" onClick={handleClose} src={Close} alt="" />

          <div className="mensage-item-attention">
            <img className="img-attention" src={Attention} alt="close" />

            {currentCobrancas.status === "Pendente" ? (
              <p className="p-img-attention">
                Tem certeza que deseja excluir esta cobrança?{" "}
              </p>
            ) : (
              <p>Essa cobrança não pode ser excluída</p>
            )}
            <span className="confirmation-buttons">
              {currentCobrancas.status === "Pendente" && (
                <button onClick={handleClose}>Não</button>
              )}
              {currentCobrancas.status === "Pendente" && (
                <button onClick={handleDeleteCobranca}>Sim</button>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
