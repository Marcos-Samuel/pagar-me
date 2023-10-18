import * as yup from "yup";

export const validationEditClient = yup.object().shape({
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
    .required("Email é um campo obrigatório")
    .email("Formato de email invalido")
    .transform((email) => email.toLowerCase()),
  cpf: yup
    .string()
    .required("CPF é um campo obrigatório")
    .transform((cpf) => cpf.replace(/[^a-zA-Z0-9]/g, "")),
  phone: yup
    .string()
    .required("Campo telefone é obrigatório")
    .transform((phone) => phone.replace(/[^a-zA-Z0-9]/g, "")),
  address: yup.string(),
  complemet: yup.string(),
  cep: yup.string().transform((cep) => cep.replace(/[^a-zA-Z0-9]/g, "")),
  neighborhood: yup.string(),
  city: yup.string(),
  uf: yup.string().max(2, "Você deve informar o estado no formato UF"),
});
