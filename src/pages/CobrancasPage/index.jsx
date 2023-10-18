import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import ModalClients from "../../components/ModalClients";
import FullTableCobranca from "../../components/FullTableCobranca";
import { useMainContext } from "../../hooks/useMainContext";
import MenuTable from "../../components/MenuTable";

export default function CobrancaPage() {
  const { modalClients, handleOpen, charges, setCharges } = useMainContext();
  const title = "Cobranças";

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <main className="container-clients">
          <MenuTable name={title} />
          <FullTableCobranca
            cobrancas={charges}
            handleOpen={handleOpen}
            setCobrancas={setCharges}
          />
        </main>

        {modalClients && <ModalClients />}
      </div>
    </div>
  );
}
