# 객체지향 자바스크립트의 원리 정리
### 1장: 원시 타입과 참조 타입
- 참조 타입(Primitive Types) = 자바스크립트 객체
- 참조 값 = 참조 타입의 인스턴스 = 객체(objects)
  - 객체는 순서가 없는 프로퍼티로 이루어짐
    - 프로퍼티의 값이 함수일 때 메소드
- 객체 변수에 null을 할당하면 참조 제거가 되어 가비지 컬렉션이 됨.
- 내장 참조 타입
  - Array, Date, Error, Function, Object, RegExp
- 프로퍼티 접근
  - 점 표기법
  - 각괄호 표기법
    - var array = [];
    - var method = "push"
    - array["method"](12345);
- 배열 확인
  - Array.isArray()

### 2장: 함수
- Function에만 있는 내부 속성
  - [[Call]]: 객체가 실행될 수 있는지 판단한다
- 함수 선언 vs 표현식
  - 함수 선언
    - function add (num1, num2){
    -   return num1 + num2;
    - }
  - 함수 표현식
    - var add = function(num1, num2){
    -   return num1 + num2;
    - };
  - 중요한 차이: 함수 선언은 호이스팅 됨. 호출하기 전에 실행하는 거라면 노 상관.
- 일급함수
  - 변수에 할당할 수 있고
  - 객체에 추가할 수 있으며
  - 다른 함수에 인수로 전달하거나 함수를 반환 가능
  - : 참조 값을 쓸 수 있는 곳이라면 어디서든 함수도 사용 가능.
- 인수
  - 인수는 arguments라는 구조체에 저장.
  - 함수의 length 프로퍼티는 함수에 *전달될 것이라고 기대하는* 인수의 개수.
- this값을 변경하는 세가지 메소드
  - call(this로 사용될 값, 함수의 인수)
  - apply(this로 사용될 값, 함수의 인수 배열)
  - bind(새 함수에서 this로 사용할 값)

### 3장: 객체의 이해
- 프로퍼티 여부 확인
  - property in object
  - 고유 프로퍼티만 찾으려면 hasOwnProperty() 메소드 사용.
- 프로퍼티의 내부 메소드
  - [[Put]]
    - 프로퍼티를 처음 객체에 추가할 때 객체에 있는 [[Put]]이라는 내부 메소드 호출. 고유 프로퍼티가 만들어짐.
    - 고유 프로퍼티는 객체의 특정 인스턴스에 속해있으며 인스턴스에 바로 저장.(<->프로토타입 프로퍼티)
  - [[Delete]]
    - 프로퍼티에 delete 연산자를 사용하면 호출됨. 무사히 실행 마치면 true 반환.
- 프로퍼티의 내부 속성
  - 공통 속성
    - [[Enumerable]]
      - 프로퍼티가 for-in이나 Object.keys()를 쓸 때 열거되는 게 가능한 지의 여부
      - 네이티브 메소드는 대개 false로 설정
      - Object.keys()를 사용해서도 목록을 가져올 수 있음
        - 이름 목록을 배열 형태로 다루고 싶으면 keys() 배열이 필요 없으면 for-in
        - for-in은 프로토타입 프로퍼티도 반환하지만 keys()는 고유 프로퍼티만 반환
    - [[Configurable]]
      - 해당 프로퍼티가 변경 가능한 지 여부. false면 delete, defineProperty() 등이 안 됨.
      - false가 되면 지울 수도, 다시 true로 변경할 수도 없음. 프로퍼티를 해당 객체에 고정시키는 것.
  - 데이터 프로퍼티 속성
    - [[Value]]
      - 프로퍼티의 값
    - [[Writable]]
      - 값을 저장할 수 있는지 여부.
  - 접근자 프로퍼티 속성
    - [[Set]]
      - 세터 함수
    - [[Get]]
      - 게터 함수
  - 참고: 아래 코드 두 가지의 실행 결과는 똑같음
  ~~~
  var person1 = {
    name: "Nicholas"
  };
  ~~~
  ~~~
  var person1 = {};

  Object.defineProperty(person1, "name", {
    value: "Nicholas",
    enumerable: true,
    configurable: true,
    writable: true
  });
  ~~~
- 프로퍼티 관련 함수
  - Object.defineProperty(): 프로퍼티 설정
  - Object.defineProperties(): 여러 프로퍼티를 동시에 설정
  - Object.getOwnPropertyDescriptor(대상 객체, 프로퍼티 이름):   
- 객체 수정 방지
  - 확장 방지
    - 프로퍼티를 추가할 수 없음
    - Object.preventExtensions()로 [[Extensible]]을 false로.
    - Object.isExtensible()로 확인 가능
    - [[Extensible]]: flase라면 새 프로퍼티를 추가할 수 없음.
  - 객체 봉인
    - 확장 불가능하며 모든 프로퍼티가 설정 불가능. 프로퍼티를 읽고 쓰는 것만 가능해짐.
    - Object.seal()로 [[Extensible]]을 false로, 모든 프로퍼티의 [[Configurable]]이 false로.
    - Object.isSealed()로 확인 가능
  - 객체 동결
    - 봉인 + 데이터 프로퍼티를 읽기 전용으로. 동결은 해제 불가능
    - Object.freeze(), Object.isFrozen()

### 4장: 생성자와 프로토타입
- new의 this
  - 생성자를 호출할 때 new 연산자가 자동으로 만들어낸다. 생성자 타입의 인스턴스를 참조한다.
- 프로토타입
  - [[Prototype]]
    - 모든 인스턴스의 내부 프로퍼티에 있음.
    - 인스턴스가 사용하고 있는 프로토타입 객체를 가리킴
    - new를 사용해 새 객체를 생성할 때 생성자의 prototype 프로퍼티가 새로 생성된 객체의 [[Prototype]] 프로퍼티에 할당됨.
    - 일반 객체의 [[Prototype]]은 언제나 Object.prototype을 참조
    - 객체에 있는 __proto__라는 프로퍼티로 [[Prototype]]을 읽거나 쓸 수 있음. ES6부터 표준에 반영.
    - 그 이전 버전에서는 Object.getPrototypeOf() 활용
    - 고유 프로퍼티는 프로토타입 프로퍼티를 가린다.
    - 인스턴스에서는 프로토타입 프로퍼티에 값을 할당할 수 없다.
    - 메소드를 프로토타입에 두고 this를 사용해 현재 인스턴스에 접근하는 것이 효율적
    - 프로토타입을 객체 리터럴로 입력하기도 함. 그러나 constructor가 Object를 참조하게 됨. constructor 프로퍼티는 객체 인스턴스가 아닌 프로토타입에 정의되어 있기 때문.
  - 프로토타입 체이닝
    - 프로토타입의 변화는 프로토타입을 참조하고 있는 모든 인스턴스에 즉시 적용된다
    - 봉인되거나 동결된 객체의 프로토타입에도 값을 추가할 수 있다.
    - => [[Prototype]] 프로퍼티는 인스턴스의 고유 프로퍼티라 볼 수 있는데 프로퍼티 자체는 동결되어도 프로퍼티의 값(객체)은 동결되지 않는다.

### 5장: 상속

### 6장: 객체 패턴    
