import * as yup from "yup";

export const validationEditUser = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  cpf: yup.string().transform((cpf) => cpf.replace(/[^a-zA-Z0-9]/g, "")),
  phone: yup.string().transform((phone) => phone.replace(/[^a-zA-Z0-9]/g, "")),
  newPassword: yup.string(),
  password: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "As senhas não coincidem"),
});
