export function formatarCPF(cpf) {
  const numerosCpf = cpf?.replace(/\D/g, "");

  const cpfFormatado = numerosCpf?.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );

  return cpfFormatado;
}

export function formatarTelefone(telefone) {
  const numerosTelefone = telefone?.replace(/\D/g, "");

  const telefoneFormatado = numerosTelefone?.replace(
    /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
    "$1 $2 $3 $4"
  );

  return telefoneFormatado;
}

export function formatarCEP(cep) {
  const numerosCEP = cep?.replace(/\D/g, "");

  const cepFormatado = numerosCEP?.replace(/^(\d{5})(\d{3})$/, "$1-$2");

  return cepFormatado;
}
