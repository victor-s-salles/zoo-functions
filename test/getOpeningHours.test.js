const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se dado um horario valido de funcionamento ele retorna que esta aberto ou fechado', () => {
    expect(getOpeningHours('Tuesday', '12:45-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '01:45-PM')).toBe('The zoo is open');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Monday', '12:45-PM')).toBe('The zoo is closed');
  });
  it('Testa se passado um parametro de forma errada ele lança o erro correto', () => {
    expect(() => getOpeningHours('Thursday', '20:45-SP')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
    expect(() => getOpeningHours('Seguddnda', '01:45-PM')).toThrow(/^The day must be valid. Example: Monday$/);
    expect(() => getOpeningHours('Thursday', 'TEST-SP')).toThrow(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Thursday', '12:90-PM')).toThrow(/^The minutes must be between 0 and 59$/);
    expect(() => getOpeningHours('Monday', '13:10-PM')).toThrow(/^The hour must be between 0 and 12$/);
    expect(() => getOpeningHours('Thursday', 'PM')).toThrow(/^The hour should represent a number$/);
  });
  it('Se a função não receber parametros deve retornar todo o horario de funcionamento', () => {
    const dias = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(dias);
  });
});
