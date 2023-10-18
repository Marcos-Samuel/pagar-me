import * as yup from "yup";

export const validationSignUp = yup.object().shape({
  name: yup
    .string()
    .required("O campo nome é obrigatório")
    .matches(/^[A-Za-z\s]+$/, "Digite apenas letras no campo de nome")
    .transform((originalValue) => {
      if (originalValue.trim() === "") {
        return;
      }
      return originalValue
        .trim()
        .split(" ")
        .map((letra) => {
          return letra[0].toUpperCase().concat(letra.substring(1));
        })
        .join(" ");
    }),
  email: yup
    .string()
    .required("O campo email é obrigatório")
    .min(8, "Email deve ter no mínimo 8 caracteres")
    .email("Formato de email inválido")
    .transform((email) => email.toLowerCase()),
});

export const validationPasswordSignUp = yup.object().shape({
  password: yup
    .string()
    .required("O compo senha é obrigatório.")
    .min(6, "O campo senha deve ter no minimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("O compo repetir a senha é obrigatório.")
    .oneOf([yup.ref("password"), null], "As senha não coincidem"),
});
