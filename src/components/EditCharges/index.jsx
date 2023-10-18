import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import clients from "../../assets/clients.svg";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingBtn from "../LoadingInput";
import LoadingBtnWhite from "../../components/LoadingBtnWhite";
import { ValidationEditCharges } from "../../validation/ValidiationEditCharges";
import InputMask from "react-input-mask";

export default function EditCharges({ cobrancaReg, setOpenModalRegister }) {
  const { userLog, handleOpen } = useMainContext();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidationEditCharges),
  });

  const onSubmit = async (data) => {
    const newCharge = { ...data, id: cobrancaReg.id };

    try {
      await Api.patch(`/clients/${cobrancaReg.id}/`, newCharge, {
        headers: {
          Authorization: userLog.token,
        },
      });
      handleOpen();
      setOpenModalRegister(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className="closer"
          src={CloseModal}
          alt="Close"
          onClick={handleOpen}
        />
        <div className="container-title">
          <img src={clients} alt="icon client" />
          <h1>Edição de Cobrança</h1>
        </div>

        <div className="container-inputs">
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            name="name"
            defaultValue={cobrancaReg.name}
            disabled
          />
        </div>

        <div className="container-inputs-2">
          <label htmlFor="description">Descrição *</label>
          <textarea
            id="description"
            cols="20"
            rows="5"
            placeholder="Escreva a descrição aqui"
            {...register("description")}
          />
          {errors.description && (
            <span className="error">{errors.description.message}</span>
          )}
        </div>

        <div className="container-cpf-telefone">
          <div className="container-inputs">
            <label htmlFor="date">Vencimento *</label>
            <InputMask
              className=" input-description"
              mask="99/99/9999"
              placeholder="Data de Vencimento"
              {...register("due_date")}
            />
            {errors.due_date && (
              <span className="error">{errors.due_date?.message}</span>
            )}
          </div>
          <div className="container-inputs">
            <label htmlFor="value">Valor*</label>
            <input
              type="text"
              placeholder="Digite o Valor"
              {...register("value")}
            />
            {errors.value && (
              <span className="error">{errors.value.message}</span>
            )}
          </div>
        </div>
        <div className="radio-buttons ">
          <div className="flex">
            <input
              type="radio"
              value="Paga"
              id="status-paga"
              checked
              {...register("status")}
            />
            <label htmlFor="status-paga">Cobrança Paga</label>
          </div>
          <div className="flex">
            <input
              type="radio"
              value="Pendente"
              id="status-pendente"
              {...register("status")}
            />
            <label htmlFor="status-pendente">Cobrança Pendente</label>
          </div>
        </div>
        <div className="buttons-submit">
          <button className="btn-cancel" type="button" onClick={handleOpen}>
            Cancelar
          </button>

          <button>Aplicar</button>
        </div>
      </form>
    </div>
  );
}
