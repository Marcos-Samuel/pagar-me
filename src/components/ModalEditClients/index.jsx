import "./style.css";
import CloseModal from "../../assets/close.svg";
import { useMainContext } from "../../hooks/useMainContext";
import IconClients from "../../assets/clients.svg";
import { useState, memo } from "react";
import Api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactInputMask from "react-input-mask";
import LoadingBtn from "../LoadingInput";
import LoadingBtnWhite from "../../components/LoadingBtnWhite";
import MensagemFlash from "../../components/MensageFlash";
import { validationEditClient } from "../../validation/validationEditClient ";

function ModalEditClients({ id, client }) {
  const {
    userLog,
    setMessageSucessAddClient,
    messageFlash,
    setMessageFlash,
    handleOpenEdith,
  } = useMainContext();

  const [text, setText] = useState(false);

  const [form, setForm] = useState({
    address: "",
    city: "",
    state: "",
  });

  const [removeLoad, setRemovedLoad] = useState(true);
  const [removeLoadBtn, setRemovedLoadBtn] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationEditClient),
    defaultValues: {
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      phone: client.phone,
     complement: client.complement,
      cep: client.cep.replace(/\s+/g, ""),
    },
  });

  const [address, setAddress] = useState(client.address);
  const [inputChanged, setInputChanged] = useState(false);

  const createrUser = async (data) => {
    const newData = {
      ...data,
      address: inputChanged ? address : defaultValues.address,
      city: defaultValues.city,
      state: defaultValues.state,
      neighborhood: defaultValues.neighborhood,
    };

    try {
      setRemovedLoadBtn(false);
      await Api.patch(`clients/${id}`, newData, {
        headers: {
          Authorization: userLog.token,
        },
      });

      setRemovedLoadBtn(true);
      setMessageSucessAddClient(true);
      handleOpenEdith();
      return;
    } catch (error) {
      setRemovedLoadBtn(true);
      setText(error.response.data.message);
      setMessageFlash(true);
      return;
    }
  };

  const handleBuscaCep = async ({ target }) => {
    if (target.value) {
      try {
        setRemovedLoad(false);
        const { data } = await Api.get(`/cep/${target.value}`, {
          headers: {
            Authorization: userLog.token,
          },
        });

        setRemovedLoad(true);
        setForm(data);
        return;
      } catch (error) {
        setRemovedLoad(true);
        setText(error.response.data.message);
        setMessageFlash(true);
        return;
      }
    }
    return;
  };

  const handleConcatenate = (e) => {
    const { value } = e.target;
    setAddress(value);
    setInputChanged(true);
  };

  const defaultValues = {
    address:
      form.address && form.address !== client.address
        ? form.address
        : client.address,
    neighborhood:
      form.neighborhood && form.neighborhood !== client.neighborhood
        ? form.neighborhood
        : client.neighborhood,
    city: form.city && form.city !== client.city ? form.city : client.city,
    state:
      form.state && form.state !== client.state ? form.state : client.state,
  };

  return (
    <div className="backdrop">
      <form onSubmit={handleSubmit(createrUser)}>
        <img
          className="closer"
          src={CloseModal}
          alt="Close"
          onClick={handleOpenEdith}
        />
        <div className="container-title">
          <img src={IconClients} alt="icon client" />
          <h1>Editar Cliente</h1>
        </div>

        <div
          className={`container-inputs ${errors.name ? "erros-inputs" : ""}`}
        >
          <label htmlFor="name">Nome *</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Digite seu nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div
          className={`container-inputs ${errors.email ? "erros-inputs" : ""}`}
        >
          <label htmlFor="email">E-mail *</label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Digite seu email"
          />
          {errors.email && (
            <span className="erros-inputs">{errors.email.message}</span>
          )}
        </div>

        <div className="container-cpf-telefone">
          <div
            className={`container-inputs ${errors.cpf ? "erros-inputs" : ""}`}
          >
            <label htmlFor="cpf">CPF*</label>
            <ReactInputMask
              mask="999.999.999-99"
              maskChar={false}
              {...register("cpf")}
              placeholder="Digite seu CPF"
            />
            {errors.cpf && (
              <span className="erros-inputs">{errors.cpf.message}</span>
            )}
          </div>

          <div
            className={`container-inputs ${errors.phone ? "erros-inputs" : ""}`}
          >
            <label htmlFor="phone">Telefone*</label>
            <ReactInputMask
              mask=" 99 9 9999-9999"
              maskChar={false}
              {...register("phone")}
              placeholder="Digite seu telefone"
            />
            {errors.phone && (
              <span className="erros-inputs">{errors.phone.message}</span>
            )}
          </div>
        </div>

        <div className="container-inputs">
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            {...register("address")}
            placeholder="Digite seu endereço"
            value={inputChanged ? address : defaultValues.address}
            onChange={handleConcatenate}
          />
        </div>
        <div className="container-inputs">
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            id="complement"
            {...register("complement")}
            placeholder="Digite seu complemento"
          />
        </div>

        <div className="container-cep-bairro">
          <div
            className={`container-inputs ${errors.cep ? "erros-inputs" : ""}`}
          >
            <label htmlFor="cep">CEP</label>
            <ReactInputMask
              mask="99999-999"
              maskChar={false}
              {...register("cep")}
              onBlur={handleBuscaCep}
              placeholder="Digite seu CEP"
            />
            {errors.cep && (
              <span className="erros-inputs">{errors.cep.message}</span>
            )}
          </div>

          <div className="container-inputs">
            <label htmlFor="neighborhood">Bairro</label>
            <input
              type="text"
              id="neighborhood"
              {...register("neighborhood")}
              placeholder="Digite seu bairro"
              value={defaultValues.neighborhood}
            />
            {!removeLoad && <LoadingBtn />}
          </div>
        </div>

        <div className="container-cidade-uf">
          <div className="container-inputs">
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              {...register("city")}
              placeholder="Digite sua cidade"
              value={defaultValues.city}
            />

            {!removeLoad && <LoadingBtn />}
          </div>

          <div className="container-inputs">
            <label htmlFor="state">UF</label>
            <input
              type="text"
              id="state"
              {...register("state")}
              placeholder="Digite a UF"
              value={defaultValues.state.replace(/\s+/g, "")}
            />
            {!removeLoad && <LoadingBtn />}
          </div>
        </div>

        <div className="buttons-submit">
          <button
            className="btn-cancel"
            type="button"
            onClick={handleOpenEdith}
          >
            Cancelar
          </button>

          <button>{!removeLoadBtn ? <LoadingBtnWhite /> : "Aplicar"}</button>
        </div>
      </form>

      {messageFlash && <MensagemFlash msg={text} />}
    </div>
  );
}

export default memo(ModalEditClients);
