import React, { useState } from "react";

import "./style.css";

export default function SteperAside({ stepIndex, handleReturnStep }) {
  return (
    <>
      <div className="container-stepper">
        <div className="container-step">
          <div className="container-step-title">
            <div className={"outer-circle-complete"}>
              <div
                onClick={handleReturnStep}
                className={`${
                  stepIndex === 0 ? "inner-circle-white" : "check"
                }`}
              />
            </div>
            <span className="title-stepl">Cadastre-se</span>
          </div>
          <span className="description">
            Por favor, escreva seu nome e e-mail
          </span>
        </div>

        <div className="container-step">
          <div className="container-step-title">
            <div
              className={`${
                stepIndex >= 1 ? "outer-circle-complete " : "outer-circle"
              }`}
            >
              <div
                className={`${stepIndex < 1 ? "inner-circle" : ""}   ${
                  stepIndex > 1 ? "check" : "inner-circle-white"
                } `}
              />
            </div>
            <span className="title-stepl">Escolha uma senha</span>
          </div>
          <span className="description">Escolha uma senha segura</span>
        </div>

        <div className="container-step">
          <div className="container-step-title">
            <div
              className={`${
                stepIndex >= 2 ? "outer-circle-complete " : "outer-circle"
              }`}
            >
              <div
                className={`${stepIndex < 2 ? "inner-circle" : ""}   ${
                  stepIndex === 2 ? "check" : "inner-circle-white"
                } `}
              />
            </div>
            <span className="title-stepl">Cadastro realizado com sucesso</span>
          </div>
          <span className="description">
            E-mail e senha cadastrados com sucesso
          </span>
        </div>
      </div>
    </>
  );
}
