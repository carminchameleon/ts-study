// coffee machine 이라는 class
// coffeeBeans 라는 속성
// makeCoffee가 있어야 함

type CoffeeCup = {
  shots: number;
  hasMilk: boolean;
};

class CoffeeMaker {
  BEANS_GRAM_PER_SHOT: number = 7;
  coffeeBeans: number = 0;

  // class를 가지고 instance를 만들 때 호출되는 것
  constructor() {}

  makeCoffee(shots: number): CoffeeCup {
    if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
      //  커피콩의 양이 , 내가 만들고자 하는 커피보다 적으면 에러가 있어야 함
      throw new Error('Not enough coffee beans!');
    }

    // 커피를 만든 만큼 커피콩의 그람수를 줄여야 함
    this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
}
