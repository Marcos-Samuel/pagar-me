import './style.css';
import Loadbtn from '../../assets/loading-white.svg';

export default function LoadButton() {
  return (
    <div className="load-button">
      <img src={Loadbtn} alt="" />
    </div>
  );
}
