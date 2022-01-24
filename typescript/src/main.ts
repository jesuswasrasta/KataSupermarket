const apple = 50;
const pear = 30;

export enum Fruit {
  APPLE = 'APPLE',
  PEAR = 'PEAR',
}

export function checkout(quantity: number): number {
  return quantity * apple;
}

export function checkoutFruit(fruit: Fruit, quantity: number): number {
  switch (fruit) {
    case Fruit.APPLE:
      return checkout(quantity);
    case Fruit.PEAR:
      return quantity * pear;
    default:
      throw new Error('Undefined');
  }
}
