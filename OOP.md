#  OOP Object Oriented Programming

## Object 
### a programming paradigm
코딩을 하는 여러가지 방식. 스타일 
### based on the concept of 'object' 
oop : 
객체를 컨셉으로 해서 프로그래밍을 해 나가는 방식
object: 관련된 데이터나 코드를 하나로 묶을 수 있는 것

한 언어로 객체 지향을 마스터 하면 다른 언어로 하는 것은 어렵지 않다.
객체 지향은 기본적으로 이해하고 쓸 수 있어야 한다.

다른 프로그래밍 언어를 공부할 때에도 쉽게 배울 수 있다.

1. concept
2. 관례, 관습
3. 지식 -> 연습 practice

# Imperative명령 and Procedural절차 Programming : 절차 지향 프로그래밍

명령과 절차를 따라가는 프로그래밍

객체 지향 프로그밍과 상반되는 것

정의된 순서. 절차적으로 프로그래밍이 진행된다.
단점이 많다. 
1. 내가 프로그래밍에 신규로 투입 되었을 때,함수가 엮여 있고 데이터가 다른 곳에서 업데이트 되기 때문에 전체적인 것을 다 이해하고 있어야 하고 
2. 하나를 수정했을 때 sideEffect가 발생할 가능성이 높다.
3. 한 눈에 어플리케이션을 이해햐기가 어렵다.
4. 유지보수, 확장을 하기 어렵다. 


반대로, 객체 지향 프로그래밍은
프로그램을 객체로 정의해서 객체들 끼리 의사소통 하도록 디자인하고 코딩해 나가는 것이다. 서로 관련있는 데이터와 함수를 여러가지 객체로 정의한다.
세상을 살면서 흔하게 볼 수 있는 object, 객체를 말한다.
사람과 가까운 생각을 하면서 object를 구성해나갈 수 있다.
한 곳에서 문제가 생기면 그와 관련된 object만 이해하고 수정하면 된다.
여러번 반복되는 곳이 있다면 관련된 object를 재사용 할 수 있고
새로운 기능이 필요하면 관련된 object만 새로 만들면 되니까 확장성 있다.

- productivity  생산성을 높여준다.
- higher - quality 높은 퀄리티의 프로그램을 만들 수 있게 한다.
- Faster 빠르게 기능을 추가하고 수정할 수 있는 유지보수


객체 - 함수와 데이터들
일상 생활에서 볼 수 있는 실제로 존재하는 물제 뿐만 아니라
error, exception, event 추상적인 것들도 모두 객체로 만들고 관리할 수 있다.
꼭 명사를 이용해서 지정할 수 있다. 
fields, property라고 부른다. 함수는 methods

class 를 이용해서 정의
## class
- template
- declare once
- no data in
데이터가 들어있지 않고 이렇게 생겼어 라고 정의만 하는 template

실제로 데이터를 넣어서 만드는 것이 
## Object
- instance of a class
- created many times
- data in
class의 instance다 라고 말한다. 붕어빵 틀로 팥 붕어빵 instance를 만든다 라고 표현한다. 

class는 어떻게 생겼는지를 정의한다. 

예를 들어 student 라는 이름과 점수라는 data와 study라는 함수가 있다. 라고 정의를 하고
실제로 데이터를 넣은 오브젝트들 'carmen, 100, study()'와
'bob, 10, study()'와 같이 다른 데이터들을 만들어서 인스턴스를 만들어 낼 수 있다. 

class라는 청사진을 이용해 다양한 오브젝트를 만든다.


Q? 그렇다면 객체지향은 class로 object를 만드는 것만을 이야기 하는가?
그것은 아니다. 객체 지향에는 중요하게 지켜야 하는 원칙들이 있다.  
