import "./style.css";
import LoadBtnIcon from "../../assets/load-bg-pink.svg";

export default function LoadingBtnWhite() {
  return (
    <div className="container-load-btn">
      <img className="img-load-btn" src={LoadBtnIcon} alt="loading" />
    </div>
  );
}
