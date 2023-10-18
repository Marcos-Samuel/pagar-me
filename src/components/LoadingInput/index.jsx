import "./style.css";
import LoadBtnIcon from "../../assets/load-pink.svg";

export default function LoadingInput() {
  return (
    <div className="container-load-input">
      <img className="img-load-input" src={LoadBtnIcon} alt="loading" />
    </div>
  );
}
