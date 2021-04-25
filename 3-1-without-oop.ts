{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;
  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      //  커피콩의 양이 , 내가 만들고자 하는 커피보다 적으면 에러가 있어야 함
      throw new Error('Not enough coffee beans!');
    }

    // 커피를 만든 만큼 커피콩의 그람수를 줄여야 함
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 20;

  const coffee = makeCoffee(2);
  console.log(coffee);
}
