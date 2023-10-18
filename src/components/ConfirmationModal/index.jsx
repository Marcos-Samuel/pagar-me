import React from "react";
import "./style.css";

export default function ConfirmationModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="confirmation-modal">
      <p>Deseja sair?</p>
      <div className="buttons-logout">
        <button onClick={onCancel}>Não</button>
        <button onClick={onConfirm}>Sim</button>
      </div>
    </div>
  );
}
