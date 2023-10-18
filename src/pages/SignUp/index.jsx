import { useState,  useEffect } from "react";
import "./style.css";
import SteperAside from "../../components/SteperAside";
import FormSignUp from "../../components/FormSignUp";
import SteperFooter from "../../components/SteperFooter";
import { useNavigate } from "react-router-dom";
import { useMainContext } from "../../hooks/useMainContext";

export default function SignUp() {
  const [stepIndex, setStepIndex] = useState(0);

  const { userLog } = useMainContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (userLog.token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleReturnStep = () => {
    if (stepIndex === 0) {
      return;
    } else if (stepIndex === 2) {
      return;
    } else if (stepIndex === 1) {
      setStepIndex(0);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-container-left">
        <SteperAside
          stepIndex={stepIndex}
          handleReturnStep={handleReturnStep}
        />
      </div>
      <div className="container-main">
        <div className="signup-container-rigth">
          <FormSignUp stepIndex={stepIndex} setStepIndex={setStepIndex} />
        </div>
        <div>
          <SteperFooter stepIndex={stepIndex} />
        </div>
      </div>
    </div>
  );
}
