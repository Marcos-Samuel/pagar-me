import React, { useEffect, useState } from "react";
import eyeOpen from "../../assets/eye-open.png";
import eyeClose from "../../assets/eye-close.png";
import Sucess from "../../assets/sucess.svg";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "../../services/api";
import {
  validationPasswordSignUp,
  validationSignUp,
} from "../../validation/validationSignUp";

export default function FormSignUp({ stepIndex, setStepIndex }) {
  const [eye, setEye] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      stepIndex === 0 ? validationSignUp : validationPasswordSignUp
    ),
  });

  const validateFormData = async (data) => {
    try {
      await Axios.post("/validate-email", {
        email: data.email,
      });

      setStepIndex(stepIndex + 1);
    } catch (error) {
      setError("root", {
        serverError: {
          type: error.response.status,
          message: "O email já está cadastrado",
        },
      });
    }
  };

  const onSubmit = async (data) => {
    if (!data.password) {
      await validateFormData(data);
    } else {
      try {
        await Axios.post("/signup", data);
        setStepIndex(stepIndex + 1);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {stepIndex < 2 && (
          <h1>{stepIndex < 1 ? "Adicione seus dados" : "Escolha uma senha"}</h1>
        )}
        {stepIndex === 0 && (
          <>
            <div className="container-inputs">
              <label htmlFor="name">Nome *</label>
              <input
                type="text"
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              {errors.name && (
                <span className="error">{errors.name?.message}</span>
              )}
            </div>

            <div className="container-inputs">
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                id="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email ? (
                <span className="error">{errors.email?.message}</span>
              ) : (
                errors?.root?.serverError?.type && (
                  <span className="error">
                    {errors.root.serverError?.message}
                  </span>
                )
              )}
            </div>
          </>
        )}

        {stepIndex === 1 && (
          <>
            <div className="container-inputs">
              <label htmlFor="password">Senha *</label>
              <input
                type={eye ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Digite seu senha"
                {...register("password", {
                  required: "A senha e obrigatoria.",
                })}
              />
              {errors.password && (
                <span className="error">{errors.password?.message}</span>
              )}
              <div className="password-toggle" onClick={() => setEye(!eye)}>
                {eye ? <img src={eyeOpen} /> : <img src={eyeClose} />}
              </div>

              <div className="container-inputs">
                <label htmlFor="confirmPassword">Repita a senha *</label>
                <input
                  type={eye ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Repita a senha"
                  {...register("confirmPassword", {
                    required: "A Repetir a senha e obrigatorio.",
                  })}
                />

                {errors.confirmPassword && (
                  <span className="error">
                    {errors.confirmPassword?.message}
                  </span>
                )}

                <div className="password-toggle" onClick={() => setEye(!eye)}>
                  {eye ? <img src={eyeOpen} /> : <img src={eyeClose} />}
                </div>
              </div>
            </div>
          </>
        )}
        {stepIndex === 2 && <></>}
        {stepIndex < 2 && (
          <>
            <button>
              {stepIndex === 0 ? "Continuar" : "Finalizar Cadastro"}
            </button>

            <p>
              Já possui uma conta? Faça seu <Link to="/"> Login</Link>
            </p>
          </>
        )}
      </form>
      {stepIndex >= 2 && (
        <div className="container-finish">
          <div className="finish">
            <img src={Sucess} alt="finish" />
            <h2>Cadastro realizado com sucesso</h2>
          </div>
          <button type="button" onClick={() => navigate("/")}>
            Ir para o login
          </button>
        </div>
      )}
    </>
  );
}
