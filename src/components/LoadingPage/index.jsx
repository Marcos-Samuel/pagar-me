import "./style.css";
import LoadBtnIcon from "../../assets/load-pink.svg";

export default function LoadingPage() {
  return (
    <div className="container-load-page">
      <img className="img-load-page" src={LoadBtnIcon} alt="loading" />
    </div>
  );
}
