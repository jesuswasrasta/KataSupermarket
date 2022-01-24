import { checkout, checkoutFruit, Fruit } from '../src/main';

describe('minimal checkout', () => {
  it('When I checkout an apple, the system charges 50 cents', () => {
    const value = checkout(1);
    expect(value).toEqual(50);
  });
  it('When I checkout 1 pear, the system charges 30 cents', () => {
    const value = checkoutFruit(Fruit.PEAR, 1);
    expect(value).toEqual(30);
  });
});
