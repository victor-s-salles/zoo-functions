const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se dado um horario valido de funcionamento ele retorna que esta aberto ou fechado', () => {
    expect(getOpeningHours('Tuesday', '01:45-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '01:45-PM')).toBe('The zoo is open');
  });
  it('Testa se passado um parametro de forma errada ele lança o erro correto', () => {
    expect(() => getOpeningHours('Thursday', '01:45-SP')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
});
