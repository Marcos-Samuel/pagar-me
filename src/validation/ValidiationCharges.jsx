import * as yup from "yup";
import { parse, isAfter } from "date-fns";

const isFutureDate = (dateStr) => {
  const currentDate = new Date();
  const inputDate = parse(dateStr, "dd/MM/yyyy", new Date());

  return isAfter(inputDate, currentDate);
};

const ValidationCharges = yup.object().shape({
  description: yup.string().required("Este  campo deve ser preenchido"),
  value: yup
    .string()
    .required("Este  campo deve ser preenchido")
    .matches(/^[0-9]+([.,][0-9]{1,2})?$/, "Digite um valor válido"),
  due_date: yup
    .string()
    .required("A data de vencimento é obrigatória")
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Formato deve ser DD/MM/AAAA"
    )
    .test("is-future-date", "A data deve ser maior que a data atual", (value) =>
      isFutureDate(value)
    ),
});

export { ValidationCharges };
