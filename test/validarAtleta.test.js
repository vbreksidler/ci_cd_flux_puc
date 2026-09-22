const { validarAtleta } = require('../src/utils/validarAtleta');

const atletaValido = () => ({
  nome: 'Ana Silva',
  idade: 17,
  modalidade: 'Voleibol'
});

describe('validação unitária de atletas', () => {
  test('01 - aceita os dados de um atleta válido', () => {
    expect(validarAtleta(atletaValido())).toEqual({ valido: true, erros: [] });
  });

  test('02 - rejeita um atleta nulo', () => {
    expect(validarAtleta(null)).toEqual({
      valido: false,
      erros: ['Atleta deve ser um objeto.']
    });
  });

  test('03 - rejeita nome composto somente de espaços', () => {
    const resultado = validarAtleta({ ...atletaValido(), nome: '   ' });
    expect(resultado.erros).toContain('Nome deve ter pelo menos 2 caracteres.');
  });

  test('04 - rejeita nome com apenas um caractere', () => {
    const resultado = validarAtleta({ ...atletaValido(), nome: 'A' });
    expect(resultado.valido).toBe(false);
    expect(resultado.erros).toContain('Nome deve ter pelo menos 2 caracteres.');
  });

  test('05 - rejeita idade negativa', () => {
    const resultado = validarAtleta({ ...atletaValido(), idade: -1 });
    expect(resultado.erros).toContain('Idade deve ser um inteiro não negativo.');
  });

  test('06 - rejeita idade não inteira', () => {
    const resultado = validarAtleta({ ...atletaValido(), idade: 17.5 });
    expect(resultado.erros).toContain('Idade deve ser um inteiro não negativo.');
  });

  test('07 - rejeita idade informada como texto', () => {
    const resultado = validarAtleta({ ...atletaValido(), idade: '17' });
    expect(resultado.valido).toBe(false);
    expect(resultado.erros).toContain('Idade deve ser um inteiro não negativo.');
  });

  test('08 - rejeita modalidade em branco', () => {
    const resultado = validarAtleta({ ...atletaValido(), modalidade: '  ' });
    expect(resultado.erros).toContain('Modalidade é obrigatória.');
  });

  test('09 - não modifica o objeto original', () => {
    const atleta = atletaValido();
    const antes = { ...atleta };
    validarAtleta(atleta);
    expect(atleta).toEqual(antes);
  });
});
