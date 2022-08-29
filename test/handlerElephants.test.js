const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se caso não receber nenhum parametro, returna Undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se caso não receber uma string, retornar mensagem de erro', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se passado o name recebe o nome elephants', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('Testa se passanbdo cont retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se passando averageAge retorna a media de idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Testa se passado names retorna um array com todos os nomes dos elefantes', ()=>{
    expect(handlerElephants('names')).toEqual([ 'Ilana', 'Orval', 'Bea', 'Jefferson' ])
  })
});
