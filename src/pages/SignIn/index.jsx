import { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../services/api";
import { useMainContext } from "../../hooks/useMainContext";
import { useForm } from "react-hook-form";
import { validationSignIn } from "../../validation/ValidationSignIn";
import { yupResolver } from "@hookform/resolvers/yup";
import MessageFlash from "../../components/MensageFlash";
import LoadButton from "../../components/LoadButton";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSignIn),
  });

  const navigate = useNavigate();

  const { userLog } = useMainContext();

  useEffect(() => {
    if (userLog.token) {
      navigate("/home");
    }
  }, [navigate]);

  const { setUserLog, messageFlash, setMessageFlash } = useMainContext();

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const responde = await Axios.post("/login", data);

      setUserLog({
        id: responde.data.id,
        name: responde.data.name,
        email: responde.data.email,
        cpf: responde.data.cpf,
        phone: responde.data.phone,
        token: responde.data.token,
      });
      navigate("/home");
    } catch (error) {
      setMessageFlash(true);

      setText(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="signin-container">
      <div className="signin-container-left"></div>
      <div className="box-sing-in">
        <div className="signin-container-rigth">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Faça seu login!</h1>
            <div className="container-inputs">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                {...register("email")}
              />
              {errors.email && (
                <span className="error">{errors.email?.message}</span>
              )}
            </div>
            <div className="container-inputs">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password && (
                <span className="error">{errors.password?.message}</span>
              )}
            </div>
            <button type="submit" disabled={isLoading}>
              {isLoading ? <LoadButton /> : "Entrar"}
            </button>

            <p>
              Ainda não possui conta?<Link to="/signup"> Cadastre-se</Link>
            </p>
          </form>
        </div>
      </div>
      {messageFlash && <MessageFlash msg={text} />}
    </div>
  );
}
