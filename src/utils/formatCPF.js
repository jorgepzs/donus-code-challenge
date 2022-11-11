function formatCPF(cpf) {
  const convert = String(cpf);
  return convert.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

module.exports = formatCPF;
