function validarAtleta(atleta) {
  if (atleta === null || typeof atleta !== 'object' || Array.isArray(atleta)) {
    return { valido: false, erros: ['Atleta deve ser um objeto.'] };
  }

  const erros = [];

  if (typeof atleta.nome !== 'string' || atleta.nome.trim().length < 2) {
    erros.push('Nome deve ter pelo menos 2 caracteres.');
  }

  if (!Number.isInteger(atleta.idade) || atleta.idade < 0) {
    erros.push('Idade deve ser um inteiro não negativo.');
  }

  if (typeof atleta.modalidade !== 'string' || atleta.modalidade.trim().length === 0) {
    erros.push('Modalidade é obrigatória.');
  }

  return { valido: erros.length === 0, erros };
}

module.exports = { validarAtleta };
